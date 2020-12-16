import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Input } from 'react-onsenui';
import Item from './Item.jsx';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "", // 入力テキスト
      items: [] // Itemの要素を記憶しておくための配列
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    var newitems = this.state.items;
    newitems.push({ text: this.state.inputText, date: new Date() }); // 入力テキストをitems配列に追加
    this.setState({ inputText: "", items: newitems }); // this.stateを更新
  }
  render() {
    return (
      <Page>
          <Input value={this.state.inputText}
            onChange={(event) => {
              this.setState({ inputText: event.target.value, items: this.state.items })
            }}
            placeholder="テキスト入力欄"
            modifier="material" />
          <Button onClick={this.addItem}>追加</Button>
          {this.state.items.map(item => {
            return <Item text={item.text} date={item.date}></Item>
          })}
      </Page>
    );
  }
}