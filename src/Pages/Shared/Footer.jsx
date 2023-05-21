import React from 'react';
import { Link } from 'react-router-dom';
import {  FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img style={{ width: "50px", marginRight: "10px" }} src="https://cdn-icons-png.flaticon.com/512/1386/1386961.png" alt="" />

                    </Link>
                    <h1 className="text-3xl">Toy Cars Market</h1>
                    <p>Get All Car Models Here</p>
                </div>
                {/* <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div> */}
                <div>
                    <span className="footer-title">Socail Links</span>
                    <div className='flex'>
                        <FaFacebook className='text-3xl mr-2'></FaFacebook>
                        <FaInstagram className='text-3xl  mr-2'></FaInstagram>
                        <FaTwitter className='text-3xl'></FaTwitter>
                    </div>

                </div>
                <div>
                    <span className="footer-title">CONTACT</span>
                    <p><b>Email:</b> car@toys.com</p>
                    <p><b>Phone:</b> 011223344</p>
                    <p><b>Address:</b> 201/A, Block D, Mirpur 1, Dhaka</p>
                </div>
            </footer>
            <p className='text-center my-4'>Toy Cars Market - Copyright 2023</p>
        </div>
    );
};

export default Footer;