import React from 'react'
import "./Footer.css"

export const Footers = () => {
    return (
        <div bgColor='light' className='text-center text-lg-left' style={{
           
           }}>
            <div className='p-4'>
                <div lg='6' md='12' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>Footer text</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                        Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam,
                        est atque cumque eum delectus sint!
                    </p>
                </div>
            </div>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-dark' href=''>
                    PizzaDog.com
                </a>
            </div>
        </div>
    )
}
