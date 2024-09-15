import React from 'react'

const Menucard = ({menuData}) => {
      return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curelem)=>{
        return (
            <>

            <div className='class-container' key={curelem.id}>
        <div className='card'>
            <div className='card-body'>
                <span className='card-number card-circle subtle'>{curelem.id}</span>
                <span className='card-author subtle'> {curelem.name}</span>
                <h2 className='card-title'>{curelem.name}</h2>
                <span className='card-description subtle'>
                {curelem.description}
                </span>
                <div className='card-read'>Read</div>
            </div>
            <img src={curelem.images} alt="images" className='card-media' />
            <span className='card-tag subtle'>Order Now</span>
        </div>
    </div>
    </>
        )
    })}
    </section>
    </>
  );
};

export default Menucard
