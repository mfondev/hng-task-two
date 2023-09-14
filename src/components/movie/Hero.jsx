import React from 'react'
import imdb from "../../assets/imdb.svg";
import imbd_fruit from "../../assets/imdb_fruit.svg";
import play from "../../assets/Play.svg";
import { Button } from '@chakra-ui/react';
import './hero.css'

const Hero = () => {
  return (
    <div>
        <div className="home">
        <section className="inner">
          <div>
            <h1 className="innertitle">John Wick 3 : Parabellum</h1>
          </div>
          <div className="innerrating">

            <div className="imdb">
              <img src={imdb} alt="imdb" />
              <span>86.0/100</span>
            </div>

            <div className="imdbfruit">
              <img src={imbd_fruit} alt="imdb fruit" />
              <span>97%</span>
            </div>

          </div>

          <div className="innerabout">
            <p>
              John Wick is on the run after killing a member of the international
              assassins' guild, and with a $14 million price tag on his head, he
              is the target of hit men and women everywhere.
            </p>

            <Button
              display={"flex"}
              width={"200px"}
              height={"50px"}
              gap={"8px"}
              alignItems={"center"}
              backgroundColor={"#BE123C"}
              borderRadius={"6px"}
              color={"#fff"}
            >
              <img src={play} alt="Play btn" />
              WATCH TRAILER
            </Button>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Hero