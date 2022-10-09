
const Header = () => {
	return(
		<div className="container">
	        <div className="row">
	          <div className="col col-md-8 tc">
	            <h1 id='logo'>H</h1>
	            <div className='header-left'>
	              <h1>HAMEED ULLAH</h1>
	              <h1>ENTERPRISES</h1>
	              <p>Importer, exporter &</p>
	              <p>Custom service provider Afghan transit trade</p>
	              <h4>C.H.A.L.No.3112</h4>
	            </div>
	          </div>
	          <div className="col col-md-4">
	            <div className="header-right">
	            	<label htmlFor="date">Date
	            	<input type="date" />
	            	</label>
	            	<label htmlFor="ref">Ref #
	            	<input type="number" />
	            	</label>
	            </div>
	          </div>
	        </div>
      </div>
	)
}

export default Header;