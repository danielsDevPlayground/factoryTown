import React, { useState, useEffect } from 'react';
import { resources, coinMapping } from './defaultData';
import { Item } from './components/item';
import { ItemCostList } from './components/itemCostList';
import { Producer } from './components/producer';
import DataTable from 'react-data-table-component';
import { GeneralUtil } from './utils/generalUtils';
import { ResourcesDict } from './utils/interfaces/generalInterfaces';
import { ExpandedRow } from './components/expandedRow';
import { RecursionWarningDialog } from './components/recursionWarning';
const deepcopy = require('deepcopy');

export function Demo() {
  const [columns, setColumns] = useState([
    {
      name: 'Product',
      selector: 'title',
      sortable: true,
      cell: row => <Item name={row.title} label={row.title} />,
      maxWidth: "250px",
      compact: true,
    },
    {
      name: 'Building',
      selector: 'producer',
      sortable: true,
      cell: row => row.producer && <Producer name={row.producer} />,
      maxWidth: "250px",
      compact: true,
    },
    {
      name: 'Cost',
      selector: 'plainCost',
      cell: row => row.resCost && Object.keys(row.resCost).length > 0 && <ItemCostList itemObject={row.resCost} />,
      omit: false,
    },
    {
      name: 'Coin value',
      selector: 'itemValue',
      cell: row => row.itemValue && <Item name={Object.keys(row.itemValue)[0]} count={row.itemValue[Object.keys(row.itemValue)[0]]} />,
      maxWidth: "100px",
    },
    {
      name: 'Dependent Items',
      selector: 'cost',
      cell: row => row.cost && <ItemCostList itemObject={row.cost.materials} />,
      right: true,
    },
    {
      name: 'Dependent Buildings',
      selector: 'dependentProducers',
      cell: row => row.cost && <ItemCostList itemObject={row.cost.producers} />,
      right: true,
    },
    {
      name: '∑ Producer Cost',
      selector: 'producerCoinCost',
      cell: row => row.producerCoinCost && <ItemCostList itemObject={row.producerCoinCost} />,
      right: true,

    },
    {
      name: '∑ Coin Cost',
      selector: 'overallCoinCost',
      cell: row => row.overallCoinCost && <ItemCostList itemObject={row.overallCoinCost} />,
      right: true,
      minWidth: "265px",
    },
    {
      name: <div style={{ fontSize: '12pt' }}>∑ Yellow Coins </div>,
      selector: (row)=> row.yellowCoinMapping.yellowCoin,
      cell: row => row.yellowCoinMapping && <ItemCostList itemObject={row.yellowCoinMapping} />,
      right: true,
      maxWidth: "120px",
      sortable: true,
    },
  ]);

  const [isSettingMenuOpen, setIsSettingMenuOpen] = useState(false);
  const [currentResources, setResources] = useState(deepcopy(resources) as ResourcesDict);
  const [tableData, setTableData] = useState(null);
  const [currentCoinMapping, setCurrentCoinMapping] = useState(deepcopy(coinMapping));

  useEffect(() => {
    setTableData(GeneralUtil.getDataForTable(currentResources));
  }, [currentResources]);

  if (!tableData)
    return null;

  return <>
    <RecursionWarningDialog showError={document['isRecoursionDependency']} />
    <DataTable
      title="Factory Town Resources"
      columns={columns}
      data={tableData}
      highlightOnHover
      fixedHeader
      striped
      expandableRows
      expandableRowsComponent={<ExpandedRow onSave={(item) => setResources({ ...resources, ...item })} resources={currentResources} />}
      expandOnRowClicked
      fixedHeaderScrollHeight={`${window.screen.availHeight * 0.8}px`}
      actions={[
        <div key="myHeader"        >
          <div onClick={() => { setIsSettingMenuOpen(!isSettingMenuOpen); }}>Settings</div>
          {isSettingMenuOpen && <div>
            {Object.keys(currentCoinMapping).map(coinKey => {
              return <div style={{ display: 'flex', alignItems: 'center' }} key={"settings"+coinKey}>
                <div style={{ display: 'flex', flexGrow: 1, paddingRight: '8px' }}>
                  <Item name={coinKey} label={coinKey} />
                </div>
                <img
                  width={'20px'}
                  src={require(`./icons/subtract.png`)}
                  alt="subtract"
                  onClick={() => {
                    currentCoinMapping[coinKey] = currentCoinMapping[coinKey] > 0 ? currentCoinMapping[coinKey] - 1 : 0;
                    setCurrentCoinMapping({...currentCoinMapping})
                  }}
                  style={{ paddingRight: '4px' }}
                />
                <div>{currentCoinMapping[coinKey]}</div>
                <img
                  width={'20px'}
                  src={require(`./icons/add.png`)}
                  alt="add"
                  onClick={() => {
                    currentCoinMapping[coinKey] += 1;
                    setCurrentCoinMapping({...currentCoinMapping});
                  }}
                  style={{ paddingLeft: '4px' }}
                />
              </div>
            })}

          </div>
          }
        </div>
      ]}
    />
  </>;
}
