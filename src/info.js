
const Info = () => {
	return(
    <div className="container">
      <div className="row">
        <div className="col col-r">
          <label htmlFor="date">Date
          <input type="date" /></label>
          <label htmlFor="bill">Bill
          <input type="text" /></label>
        </div>
      </div>
      <div className="row tc row2">
        <div className="col col-md-3">
          <h4>Destination</h4>
          <h4>Messers</h4>
          <h4>Description</h4>
          <h4>Bill of lading #</h4>
          <h4>G.D.No</h4>
          <h4>Container QTY</h4>
          <h4>Account</h4>
          <h4>IGM #</h4>
        </div>
        <div className="col col-md">
          <h4>Torkham Afghanistan</h4>
          <h4>Wareen International</h4>
          <h4>Sugar (Anuraj)</h4>
          <h4>MKSNSNSSAKHIOOOO07</h4>
          <h4>ITTK-AT-234  DT:31.03.22</h4>
          <h4>4X20</h4>
          <h4>HAMEED ULLAH ENTERPRISES</h4>
          <div className="row d-flex">
            <h4 className='col col-md-3'>81</h4>
            <h3 className='col col-md-2'>Date</h3>
            <h4 className='col col-md-3'>29.03.2022</h4>
            <h3 className='col col-md-2'>INDEX</h3>
            <h4 className='col col-md-2'>2</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info;