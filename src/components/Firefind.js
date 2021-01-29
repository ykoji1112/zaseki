import React, { Component } from 'react'
import firebase from "firebase";
import "firebase/storage";
import FloorSelect from './FloorSelect';
import Switches from './Switches'

class Firefind extends Component {
  style = {
    borderBottom: "1px solid gray"
  }

  // 初期化。ステートとイベント用メソッドの設定
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      data: []
    }
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);

    this.findFireData(this.state.input);
  }


  // 入力フィールドに入力時の処理
  doChange(e) {
    this.setState({
      input: e.target.value
    })
  }

  // ボタンクリック時の処理
  doAction(e) {
    this.findFireData(this.state.input);
  }

  // 検索の実行
  findFireData(s) {
    let db = firebase.database();
    let ref = db.ref('sample/');
    let self = this;
    ref.orderByChild("floor")
      .startAt(s)
      .on('value', (snapshot) => {
        self.setState({
          data: snapshot.val()
        });
      });
  }

  // テーブルの内容の作成
  getTableData() {
    let result = [];
    if (this.state.data === null || this.state.data.length === 0) {
      return [<tr key="0"><th>NO DATA.</th></tr>];
    }

    result.push(
      <tr>
        <td>社員番号</td>
        <td>氏名</td>
        <td>内線番号</td>
        <td>状態</td>
        <td>メモ</td>
        <td>フロア</td>
      </tr>
    );
    for (let i in this.state.data) {
      result.push(<tr key={i}>
        <th>{this.state.data[i].ID}</th>
        <td>{this.state.data[i].name}</td>
        <td>{this.state.data[i].tel}</td>
        <Switches checked={this.state.data[i].checked}/>
        <td>{this.state.data[i].message}</td>
        <td>{this.state.data[i].floor}</td>
      </tr>);
    }
    return result;
  }

  // レンダリング
  render() {
    return (<div>
      <p>フィルタ</p>
      <FloorSelect floor='本社2階' doAction={this.doAction}/>

      <hr />

      {/* <input type="text" onChange={this.doChange}
        style={this.style} value={this.state.input} />
      <button onClick={this.doAction}>Find</button>
      <hr /> */}
      <table><tbody>
        {this.getTableData()}
      </tbody></table>
    </div>)
  }
}


export default Firefind;

