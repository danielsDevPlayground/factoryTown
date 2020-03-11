import React, { useState, useEffect } from 'react';
import { ResourcesDict } from '../utils/interfaces/generalInterfaces';
import DataTable from 'react-data-table-component';
import { Item } from './item';
import Select from 'react-select'
const deepcopy = require('deepcopy');


interface ExpandedRowProps {
  data?: any
  resources: ResourcesDict;
  onSave: (item: any) => void;
}
export const ExpandedRow = (props: ExpandedRowProps) => {
  const [item, setItem] = useState(props.resources[props.data.title]);
  const [tableData, setTableData] = useState(null);
  const selectOptions = Object.keys(props.resources).map(key => ({ label: key, value: key })).filter(option => option.value !== props.data.title);

  const columns = [
    {
      name: 'Resource',
      selector: 'title',
      sortable: true,
      cell: row => <div style={{ width: '95%' }}><Select
        isClearable={false}
        defaultValue={selectOptions.find(option => option.label === row.title)}
        formatOptionLabel={(option) => <Item name={option.label} label={option.label} alignment={'flex-start'} />}
        options={selectOptions}
        onChange={(option) => {
          delete item.cost[row.title];
          item.cost[option.value] = row.count;
          console.log("changed item from", row.title, "to", option.value);
          setItem({ ...item });
        }}
        menuPortalTarget={document.body}
        styles={{
          menuPortal: base => ({
            ...base,
            zIndex: 9999,
          }),
        }}

      /></div>,
      maxWidth: "250px",
      compact: true,
    },
    {
      name: 'Amount',
      cell: row => <div style={{ display: 'flex', alignItems: 'center', }}>
        <img width={'20px'} src={require(`../icons/subtract.png`)} alt="subtract" onClick={() => subtract(row.title)} style={{ paddingRight: '4px', cursor: 'pointer' }} />
        <div style={{fontSize: '14pt'}}>{row.count}</div>
        <img width={'20px'} src={require(`../icons/add.png`)} alt="add" onClick={() => add(row.title)} style={{ paddingLeft: '4px', cursor:'pointer' }} />
      </div>,
      maxWidth: "250px",
      compact: true,
    },
    {
      name: 'remove',
      cell: row => <div style={{ display: 'flex', alignItems: 'center', }}>
        <img width={'20px'} src={require(`../icons/delete.png`)} alt="subtract" onClick={() => deleteItem(row.title)} style={{ cursor: 'pointer' }} />
      </div>,
      maxWidth: "30px",
      compact: true,
      right: true,
    },
  ];

  useEffect(() => {
    let data = Object.keys(item.cost).map(itemKey => ({
      title: itemKey,
      count: item.cost[itemKey],
    }));
    setTableData(data);
  }, [item]);

  const subtract = (title) => {
    item.cost[title] = (item?.cost[title] && item.cost[title] > 1) ? item.cost[title] - 1 : 1;
    setItem(deepcopy(item));
  }

  const add = (title) => {
    item.cost[title] = item?.cost[title] ? item.cost[title] + 1 : 1;
    setItem(deepcopy(item));
  }

  const deleteItem = (title) => {
    delete item.cost[title];
    setItem(deepcopy(item));
  }

  if (!tableData)
    return null;

  return <div style={{ border: '2px solid silver', padding: '8px', borderRadius: '4px' }}>
    <DataTable
      columns={columns}
      data={tableData}
      highlightOnHover
      striped
      noHeader
    />
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ width: '30%', paddingTop: '8px' }}>
        <div>Add or delete resources</div>
        <Select
          isClearable={false}
          value={Object.keys(item.cost).map(key => selectOptions.find(option => key === option.value))}
          formatOptionLabel={(option) => <Item name={option.label} label={option.label} alignment={'flex-start'} />}
          options={selectOptions}
          onChange={(option, action) => {
            if (action.action === 'select-option') {
              item.cost[action.option.value] = 1;
              console.log("added item:", action.option.value);
            } else if (action.action === 'remove-value')
              delete item.cost[action.removedValue.value];

            setItem({ ...item });
          }}
          isMulti
          menuPortalTarget={document.body}
          styles={{
            menuPortal: base => ({
              ...base,
              zIndex: 9999,
            }),
          }}
        />
      </div>
      <div style={{ height: '30px', alignSelf: 'flex-end', paddingLeft: '12px' }}>
        <input type="button" value="recalculate" onClick={() => {
          let res = {};
          res[props.data.title] = item;
          props.onSave(res);
        }} />
      </div>
    </div>

    <div style={{ paddingBottom: '12px' }}></div>
  </div>
};