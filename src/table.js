
const Table = () => {
	return(
		    <div className="container">
          <div className="row tc ">
            <table className='table'>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Particuler</th>
                  <th>PKR</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>Detention Amount</td>
                  <td>RS:</td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td>Washing Charges</td>
                  <td>RS:</td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td>Dirty Charges</td>
                  <td>RS:</td>
                </tr>
                <tr>
                  <th scope='row'>4</th>
                  <td>Repairing Charges</td>
                  <td>RS:</td>
                  <td>15400</td>
                </tr>
                <tr>
                  <th scope='row'></th>
                  <td>Arrival Date <span className='ml-4'>29.03.2022</span> </td>
                </tr>
                <tr>
                  <th scope='row'></th>
                  <td>Surrender/Original Date  <span className='ml-3'>29.03.2022</span> </td>
                </tr>
                <tr>
                  <th scope='row'></th>
                  <td>Free Days Ending   <span className='ml-3'>25.03.2022</span> </td>
                </tr>
                <tr>
                  <th scope='row'></th>
                  <td>Rent Days Ending   <span className='ml-3'>Nill</span> </td>
                </tr>
                <tr>
                  <th colSpan='1'></th>
                  <td className='f3'>TOTAL</td>
                  <td>RS:</td>
                  <td>15400</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
	)
}

export default Table;