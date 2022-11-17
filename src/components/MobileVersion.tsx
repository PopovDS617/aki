import React from 'react';
import firstPic from '../../public/images/first-pic.jpg';
import secondPic from '../../public/images/second-pic-left.jpg';
import thirdPic from '../../public/images/second-pic-right.jpg';
import fourthPic from '../../public/images/pic-page-four.jpg';
import fifthPic from '../../public/images/pic-page-five.jpg';
import catIcon from '../../public/images/red-cat-icon.png';
import Button from './Button';
import Image from 'next/image';
import Link from 'next/link';
import CatSpinner from './ui/CatSpinner';

type Props = {};

const MobileVersion = (props: Props) => {
  return (
    <div className="mobile-container">
      <div className="mobile-page">
        <div className="mobile-page__text text-left">{`Hi, I'm Aki`}</div>
        <div className="mobile-page__text text-right">{`Nice to meet you!`}</div>

        <div className="mobile-page__picture">
          <Image
            width={680}
            height={680}
            alt="cat-pic"
            quality={75}
            priority
            objectFit="contain"
            src={firstPic}
          />
        </div>
      </div>
      <div className="mobile-page">
        <div className="mobile-page__text text-center">{`I'm already one year old`}</div>
        <div className="mobile-page__picture">
          <Image
            width={680}
            height={680}
            alt="cat-pic"
            quality={75}
            priority
            objectFit="contain"
            src={secondPic}
          />
        </div>
      </div>
      <div className="mobile-page">
        <div className="mobile-page__text text-center">
          {`Not a kitten anymore!`}
        </div>

        <div className="mobile-page__picture">
          <Image
            width={680}
            height={680}
            alt="cat-pic"
            quality={75}
            priority
            objectFit="contain"
            src={thirdPic}
          />
        </div>
      </div>
      <div className="mobile-page">
        <h3 className="mobile-page__header">Also I am:</h3>
        <div className="mobile-spinner">
          <CatSpinner duration="0.9s" width="100px" height="100px" />
          <p> {`Fast`}</p>
        </div>
        <div className="mobile-spinner">
          <CatSpinner duration="1s" width="100px" height="100px" />
          <p> {`Agile &`}</p>
        </div>
        <div className="mobile-spinner">
          <CatSpinner duration="1.2s" width="100px" height="100px" />
          <p> {`Handsome`}</p>
        </div>
      </div>

      <div className="mobile-page">
        <div className="mobile-page__text text-left">{`And sometimes`}</div>
        <div className="mobile-page__text text-right">{`I'm lazy`}</div>
        <div className="mobile-page__picture">
          <Image
            width={680}
            height={680}
            alt="cat-pic"
            quality={75}
            priority
            objectFit="contain"
            src={fourthPic}
          />
        </div>
      </div>
      <div className="mobile-page">
        <div className="mobile-page__text text-left"> {`But still`}</div>
        <div className="mobile-page__text text-right"> {`I'm a good boy!`}</div>

        <div className="mobile-page__picture">
          <Image
            width={680}
            height={680}
            alt="cat-pic"
            quality={75}
            priority
            objectFit="contain"
            src={fifthPic}
          />
        </div>
      </div>
      <div className="mobile-page">
        <div className="about-description">
          <h3>{`This project was created`}</h3>
          <h3>{`by Dmitry Popov with:`}</h3>
          <ul className="tech-stack-list">
            <li>- Typescript</li>
            <li>- NextJS</li>
            <li>- Sass</li>
            <li>- Framer Motion </li>
            <li>- ThreeJS + Fiber + Drei</li>
          </ul>
        </div>
        <div className="mobile-page__picture">
          <Image
            src={catIcon}
            height={200}
            width={200}
            quality={75}
            priority
            alt="cat icon"
            objectFit="contain"
          />
        </div>
        <Button styles="github-button">
          <a
            href="https://github.com/PopovDS617/aki"
            target="_blank"
            rel="noreferrer"
          >
            {`GitHub repo`}
          </a>
        </Button>
        <Button styles="start-again-button">
          <Link href="#start">{`start again`}</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileVersion;
