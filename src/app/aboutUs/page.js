

"use client";

import Header from '../components/header/header'

import React from 'react';
import Link from 'next/link';
import styles from './aboutUs.module.css';


export default function AboutUs() {

    return (
    
    <main>

<Header/>




        <section className={styles.aboutus}>
                <div className={styles.text}>
                    <h2>About us</h2>
                </div>
            </section>


            <section className={styles.ourstoryBar}>
                <div className={styles.text}>
                    <h2>Our story</h2>
                   
                        <h4>
                            We believe in creating a quality range of self care products with sustainability in mind.
                            its our passion to provide products that reflect our values and ethics which is why all
                            of our ingredients are ethically sourved and contain no fragrances and were made cruelty free.

                        
                </h4>
                <p>
                                we belive in creating a quaity range of self care products with sustainability in mind. its
                                our passion to provide products that reflect.
                            </p>
                
            </div>

            <div className={styles.image}>
                <img src="your-image-url-1.jpg" alt="image"/>
                </div>
        </section>
        
        
        <section className={styles.quoteBar}>
                <div className={styles.text}>
                    <h2>vitality quote</h2>
                    <h3>           -             </h3>
                    <h4>
                        True beauty comes from embracing nature's gifts and giving back to keep them thriving.
                        Vitality is about nurturing your skin and the world around you by celebrating the natural.
                    </h4>
                    <h3>           -             </h3>
                    <footer>
                        — Founders, London
                    </footer>
                </div>
            </section><section className={styles.missionBar}>


                <div className={styles.image}>
                    <img src="Image here"/>
                    </div>

                <div className={styles.text}>
                    <div>
                        <h2>Mission statement</h2>
                        <h4>
                            We believe in creating a quality range of self care products with sustainability in mind.
                            its our passion to provide products that reflect our values and ethics which is why all
                            of our ingredients are ethically sourved and contain no fragrances and were made cruelty free.
                            
                        </h4>
                        <p>
                                we belive in creating a quaity range of self care products with sustainability in mind. its
                                our passion to provide products that reflect.
                            </p>
                    </div>

                </div>
            </section>

    </main>
    )
}