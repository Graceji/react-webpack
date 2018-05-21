import { observable, computed, autorun, action } from 'mobx';

class AppState {
  @observable count = 0; //类的实例属性可以用等式写入类的定义之中
  @observable name = 'grace';
  @computed get msg () {
    return `${this.name} say count is ${this.count}`;
  };
  @action add () {
    this.count += 1;
  };
}


const appState = new AppState();
autorun(() => {
  // console.log(appState.msg);
});

setInterval(() => { appState.add(); }, 1000);

export default appState;
