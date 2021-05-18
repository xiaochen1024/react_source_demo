import React from "react";
import ReactDOM from "react-dom";

let workInProgressHook;//当前工作中的hook
let isMount = true;//是否时mount时

const fiber = {//fiber节点
  memoizedState: null,//hook链表
  stateNode: App//dom
};

const Dispatcher = (() => {//Dispatcher对象
  function mountWorkInProgressHook() {//mount时调用
    const hook = {//构建hook
      queue: {//更新队列
        pending: null//未执行的update队列
      },
      memoizedState: null,//当前state
      next: null//下一个hook
    };
    if (!fiber.memoizedState) {
      fiber.memoizedState = hook;//第一个hook的话直接赋值给fiber.memoizedState
    } else {
      workInProgressHook.next = hook;//不是第一个的话就加在上一个hook的后面，形成链表
    }
    workInProgressHook = hook;//记录当前工作的hook
    return workInProgressHook;
  }
  function updateWorkInProgressHook() {//update时调用
    let curHook = workInProgressHook;
    workInProgressHook = workInProgressHook.next;//下一个hook
    return curHook;
  }
  function useState(initialState) {
    let hook;
    if (isMount) {
      hook = mountWorkInProgressHook();
      hook.memoizedState = initialState;//初始状态
    } else {
      hook = updateWorkInProgressHook();
    }

    let baseState = hook.memoizedState;//初始状态
    if (hook.queue.pending) {
      let firstUpdate = hook.queue.pending.next;//第一个update

      do {
        const action = firstUpdate.action;
        baseState = action(baseState);
        firstUpdate = firstUpdate.next;//循环update链表
      } while (firstUpdate !== hook.queue.pending);//通过update的action计算state

      hook.queue.pending = null;//重置update链表
    }
    hook.memoizedState = baseState;//赋值新的state

    return [baseState, dispatchAction.bind(null, hook.queue)];//useState的返回
  }

  return {
    useState
  };
})();

function dispatchAction(queue, action) {//触发更新
  const update = {//构建update
    action,
    next: null
  };
  if (queue.pending === null) {
    update.next = update;//update的环状链表
  } else {
    update.next = queue.pending.next;//新的update的next指向前一个update
    queue.pending.next = update;//前一个update的next指向新的update
  }
  queue.pending = update;//更新queue.pending

  isMount = false;//标志mount结束
  workInProgressHook = fiber.memoizedState;//更新workInProgressHook
  schedule();//调度更新
}

function App() {
  let [count, setCount] = Dispatcher.useState(1);
  let [age, setAge] = Dispatcher.useState(10);
  return (
    <>
      <p>Clicked {count} times</p>
      <button onClick={() => setCount(() => count + 1)}> Add count</button>
      <p>Age is {age}</p>
      <button onClick={() => setAge(() => age + 1)}> Add age</button>
    </>
  );
}

function schedule() {
  ReactDOM.render(<App />, document.querySelector("#root"));
}

schedule();