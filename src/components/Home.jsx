import React, { useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

  const COLORS = ['rgba(88, 90, 241, 0.6)', 'rgba(91, 213, 152, 0.6)', 'rgba(231, 224, 16, 0.6)'];

  const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Home() {
  const [earn,setEarn] = useState(0);
  const [expenditure, setExpenditure] = useState(0);
  const [save, setSave] = useState(0);
 var one = save;
 var two = parseInt(earn);
 var three = parseInt(expenditure);
  const data = [
    { name: 'Group A', value: one },
    { name: 'Group B', value: two},
    { name: 'Group C', value: three },
    
  ];

  const handleAdd = ()=>{  
    var res = parseInt(save) + parseInt(earn) ;
 setSave(res)
  }
  const handleSubt= ()=>{
   const res = parseInt(save) - parseInt(expenditure);
   setSave(res);
  }
  
  return (
   <>
   <div className="home">
<h1>Expense Tracker</h1>
<div className="coinimage"></div>
<div className="calculations">

  <div className="leftcalculate">

<div className="clcinp1">
<h2>Savings: ₹{save}</h2> 
<h4>Earning:</h4>
<input type="text" value={earn}  onChange={(e)=>{setEarn(e.target.value)}}/>  
<button type='submit' onClick={handleAdd}> Income </button>
{/* </div> */}

{/* <div className="clcinp1"> */}
<h4>Expendeture: </h4>
 <input type="text" value={expenditure}  onChange={(e)=>{setExpenditure(e.target.value)}}/>
 <button type='submit' onClick={handleSubt}> Expense </button>
</div>
 
   <div className="calculatedata">
  <h5 className='earns'>Earning ₹{parseInt(earn)} </h5>
<h5 className='saves'>Savings ₹{save} </h5>
<h5 className='expends'>Expenditure ₹{parseInt(expenditure)}</h5>
</div>
  </div>

<div className="rightcalculate">
  <div className="indicator">
    <div className="blue">Saving</div>
    <div className="green">Earning</div>
    <div className="yellow">Expense</div>
  </div>
<ResponsiveContainer width="100%" aspect={2}>
        <PieChart className='piechart'
         style={{ width:'730px',}}>  
        {/* style={{boxShadow:'2px 2px 5px gray', width:'900px'}} */}
          <Pie  
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
</div>
</div>
   </div>
   </>
  )
}