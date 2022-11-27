import React, { useEffect, useState } from 'react';

import './App.css';

import 'igniteui-webcomponents-grids/grids/combined';
import { IgcColumnComponent, IgcColumnGroupComponent, IgcColumnLayoutComponent, IgcGridComponent } from "igniteui-webcomponents-grids/grids";

/* eslint-disable */
declare global {
  namespace JSX {
    // tslint:disable-next-line:interface-name
    interface IntrinsicElements {
      'igc-grid': Partial<IgcGridComponent & { width?: string, children: any }>;
      'igc-column': Partial<IgcColumnComponent>;
      'igc-column-group': Partial<IgcColumnGroupComponent & { children: any }>;
      'igc-column-layout': Partial<IgcColumnLayoutComponent & { children: any }>;
    }
  }
}

function App() {

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
      fetch('https://excel2json.io/api/share/548b3c63-2fb5-4578-e677-08dab79fa5b4')
          .then(result => result.json())
          .then(
            (rowData) => {
              setRowData(rowData);
              let grid = (document.getElementById("grid") as IgcGridComponent);
              grid.data = rowData;
            }
          )
  }, []);

  return (
    <div className='wrapper'>
      <h1>Hello React!</h1>
      <igc-grid
        id="grid"
        auto-generate="false"
        //data={rowData}
      >
        <igc-column-group header="氏名">
          <igc-column field="lastname" header="姓"></igc-column>
          <igc-column field="firstname" header="名"></igc-column>
        </igc-column-group>
        <igc-column-group header="連絡先">
          <igc-column field="mobile" header="電話番号"></igc-column>
          <igc-column field="email" header="メールアドレス"></igc-column>
        </igc-column-group>
        <igc-column-group header="その他">
          <igc-column field="gender" header="性別"></igc-column>
          <igc-column field="birthday" header="誕生日"></igc-column>
          <igc-column field="bloodtype" header="血液型"></igc-column>
        </igc-column-group>

        {/* <igc-column-layout header='氏名'>
          <igc-column row-start="1" row-end="2" col-start="1" col-end="2" field="lastname" header="姓"></igc-column>
          <igc-column row-start="2" row-end="3" col-start="1" col-end="2" field="firstname" header="名"></igc-column>
        </igc-column-layout>
        <igc-column-layout header='連絡先'>
          <igc-column row-start="1" row-end="2" col-start="1" col-end="2" field="mobile" header="電話番号"></igc-column>
          <igc-column row-start="2" row-end="3" col-start="1" col-end="2" field="email" header="メールアドレス"></igc-column>
        </igc-column-layout>
        <igc-column-layout header='その他'>
          <igc-column row-start="1" row-end="2" col-start="1" col-end="3"  field="gender" header="性別"></igc-column>
          <igc-column row-start="2" row-end="3" col-start="1" col-end="2"  field="birthday" header="誕生日"></igc-column>
          <igc-column row-start="2" row-end="3" col-start="2" col-end="3"  field="bloodtype" header="血液型"></igc-column>
        </igc-column-layout> */}

      </igc-grid>
    </div>
  );
}

export default App;
function componentDidMount() {
  throw new Error('Function not implemented.');
}

