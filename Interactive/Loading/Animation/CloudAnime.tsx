"use client"

import React from "react"
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { AnimationContext } from "../Loading.context";

const Container = styled.div`
    grid-area: bird;

    display: flex;
    justify-content: center;
    transform-origin: center center;
    overflow: hidden;
`

interface CloudProps {
    id: string;
    startPosition: {
        startX: number,
        endX: number,
        y: string
    };
    duration: number
}

export default function CloudAnime({ id, startPosition, duration }: CloudProps) {
    const ctx = React.useContext(AnimationContext);
    const [props, api] = useSpring(() => ({
        from: {
            x: startPosition.startX,
            y: startPosition.y,
            opacity: 1,
        },
        config: {
            mass: 5,
            tension: 100,
        },
        loop: true
    }));

    React.useEffect(() => {
        const cloud = document.getElementById(`${id}`) as HTMLElement;
        const clientWidth = cloud.clientWidth;

        const isBtnPressed = ctx?.state;
        if (isBtnPressed) {
            api.start({
                to: [
                    {
                        x: -startPosition.endX - clientWidth,
                        opacity: 0,
                    },

                    {
                        x: startPosition.startX - Math.floor(Math.random() * clientWidth),
                        opacity: 0,
                        config: {
                            duration: 3
                        }
                    },
                    {
                        x: startPosition.startX,
                        opacity: 1,
                        config: {
                            duration: 20
                        }
                    },
                ],
                config: {
                    duration: duration,
                },
                loop: true
            })
        } else {
            api.stop()
        }
    }, [ctx?.state])

    return (
        <Container id={id}>
            <animated.svg
                style={props}
                width="429" height="47" viewBox="0 0 429 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_126_195)">
                    <path d="M255.316 42C254.037 42 253 40.9632 253 39.6842C253 38.754 253.754 38 254.684 38H256V37C256 35.3431 257.343 34 259 34H259.6C260.51 32.2192 262.363 31 264.5 31C267.538 31 270 33.4624 270 36.5C270 37.02 269.928 37.5232 269.793 38H270.316C271.246 38 272 38.754 272 39.6842C272 40.9632 270.963 42 269.684 42H255.316Z" fill="#FFFDFC" />
                    <path d="M6.31579 24C5.03681 24 4 22.9632 4 21.6842C4 20.754 4.75405 20 5.68421 20H7V19C7 17.3431 8.34315 16 10 16H10.5997C11.5101 14.2192 13.3627 13 15.5 13C18.5376 13 21 15.4624 21 18.5C21 19.02 20.9278 19.5232 20.793 20H21.3158C22.246 20 23 20.754 23 21.6842C23 22.9632 21.9632 24 20.6842 24H6.31579Z" fill="#FFFDFC" />
                    <path d="M167.302 3.52614C166.315 2.58077 164.975 2 163.5 2C161.363 2 159.51 3.21916 158.6 5H158C156.343 5 155 6.34315 155 8V9H153.684C152.754 9 152 9.75405 152 10.6842C152 11.9632 153.037 13 154.316 13H156.138C156.322 13.3256 156.671 13.5455 157.072 13.5455H159.034C159.253 14.9866 160.498 16.0909 162 16.0909H162.6C163.51 17.2242 165.363 18 167.5 18C170.074 18 172.235 16.8746 172.835 15.3547C173.807 16.3428 175.533 17 177.5 17C179.637 17 181.49 16.2242 182.4 15.0909H183C184.34 15.0909 185.475 14.2124 185.86 13H189.684C190.963 13 192 11.9632 192 10.6842C192 9.75405 191.246 9 190.316 9H189.793C189.928 8.52317 190 8.02001 190 7.5C190 4.46243 187.538 2 184.5 2C182.579 2 180.889 2.98451 179.905 4.47642C179.425 1.92798 177.188 0 174.5 0C172.363 0 170.51 1.21916 169.6 3H169C168.37 3 167.785 3.19425 167.302 3.52614Z" fill="#FFFDFC" />
                    <path d="M61.5 23C62.9752 23 64.3147 23.5808 65.3024 24.5261C65.7852 24.1943 66.3699 24 67 24H67.5997C68.5101 22.2192 70.3627 21 72.5 21C75.1878 21 77.4253 22.928 77.9049 25.4764C78.8886 23.9845 80.5793 23 82.5 23C84.1588 23 85.6461 23.7343 86.6545 24.8957C87.583 23.1717 89.4047 22 91.5 22C94.5376 22 97 24.4624 97 27.5C97 28.02 96.9278 28.5232 96.793 29H97.3158C98.246 29 99 29.754 99 30.6842C99 31.9632 97.9632 33 96.6842 33H89.5901C89.1722 33.6042 88.4744 34 87.6842 34H83.8598C83.4747 35.2124 82.34 36.0909 81 36.0909H80.4003C79.4899 37.2242 77.6373 38 75.5 38C73.5329 38 71.807 37.3428 70.8348 36.3547C70.2355 37.8746 68.0743 39 65.5 39C63.3627 39 61.5101 38.2242 60.5997 37.0909H60C58.4977 37.0909 57.2533 35.9866 57.0342 34.5455H55.0718C54.6711 34.5455 54.3218 34.3256 54.1379 34H52.3158C51.0368 34 50 32.9632 50 31.6842C50 30.754 50.754 30 51.6842 30H53V29C53 27.3431 54.3431 26 56 26H56.5997C57.5101 24.2192 59.3627 23 61.5 23Z" fill="#FFFDFC" />
                    <path d="M367.814 21.4174C367.935 20.9387 368 20.4356 368 19.9167C368 16.7103 365.538 14.1111 362.5 14.1111C360.579 14.1111 358.889 15.1503 357.905 16.7251C357.425 14.0351 355.188 12 352.5 12C350.363 12 348.51 13.2869 347.6 15.1667H347C346.362 15.1667 345.771 15.3656 345.285 15.7047C344.299 14.7171 342.967 14.1111 341.5 14.1111C340.22 14.1111 339.041 14.573 338.107 15.3475C337.141 14.5081 335.88 14 334.5 14C332.363 14 330.51 15.2192 329.6 17H329C328.37 17 327.785 17.1943 327.302 17.5261C326.315 16.5808 324.975 16 323.5 16C321.363 16 319.51 17.2192 318.6 19H318C316.343 19 315 20.3431 315 22V23H313.684C312.754 23 312 23.754 312 24.6842C312 25.9632 313.037 27 314.316 27H316.138C316.322 27.3256 316.671 27.5455 317.072 27.5455H319.034C319.253 28.9866 320.498 30.0909 322 30.0909H322.6C323.51 31.2242 325.363 32 327.5 32C330.074 32 332.235 30.8746 332.835 29.3547C333.807 30.3428 335.533 31 337.5 31C338.411 31 339.271 30.8589 340.028 30.6092C340.396 30.856 340.839 31 341.316 31H343.138C343.322 31.3256 343.671 31.5455 344.072 31.5455H346.034C346.253 32.9866 347.498 34.0909 349 34.0909H349.6C350.51 35.2242 352.363 36 354.5 36C357.074 36 359.235 34.8746 359.835 33.3547C360.807 34.3428 362.533 35 364.5 35C366.637 35 368.49 34.2242 369.4 33.0909H370C371.34 33.0909 372.475 32.2124 372.86 31H376.684C377.963 31 379 29.9632 379 28.6842C379 27.754 378.246 27 377.316 27H376.793C376.928 26.5232 377 26.02 377 25.5C377 22.4624 374.538 20 371.5 20C370.082 20 368.79 20.5364 367.814 21.4174Z" fill="#FFFDFC" />
                    <path d="M278.302 8.52614C277.315 7.58077 275.975 7 274.5 7C272.363 7 270.51 8.21916 269.6 10H269C267.343 10 266 11.3431 266 13V14H264.684C263.754 14 263 14.754 263 15.6842C263 16.9632 264.037 18 265.316 18H267.138C267.322 18.3256 267.671 18.5455 268.072 18.5455H270.034C270.253 19.9866 271.498 21.0909 273 21.0909H273.6C274.51 22.2242 276.363 23 278.5 23C281.074 23 283.235 21.8746 283.835 20.3547C284.807 21.3428 286.533 22 288.5 22C290.637 22 292.49 21.2242 293.4 20.0909H294C295.34 20.0909 296.475 19.2124 296.86 18H300.684C301.963 18 303 16.9632 303 15.6842C303 14.754 302.246 14 301.316 14H300.793C300.928 13.5232 301 13.02 301 12.5C301 9.46243 298.538 7 295.5 7C293.579 7 291.889 7.98451 290.905 9.47642C290.425 6.92798 288.188 5 285.5 5C283.363 5 281.51 6.21916 280.6 8H280C279.37 8 278.785 8.19425 278.302 8.52614Z" fill="#FFFDFC" />
                    <path d="M113.242 16H106.316C105.037 16 104 14.9632 104 13.6842C104 12.754 104.754 12 105.684 12H107V11C107 9.34315 108.343 8 110 8H110.6C111.51 6.21916 113.363 5 115.5 5C118.284 5 120.585 7.06852 120.95 9.7525C121.939 8.69471 123.608 8 125.5 8C128.538 8 131 9.79086 131 12C131 12.3782 130.928 12.7441 130.793 13.0909H131.775C132.452 13.0909 133 13.6393 133 14.3158C133 15.246 132.246 16 131.316 16H127C127 18.2091 124.538 20 121.5 20C119.363 20 117.51 19.1133 116.6 17.8182H116C114.763 17.8182 113.7 17.0692 113.242 16Z" fill="#FFFDFC" />
                    <path d="M408.316 28C407.037 28 406 26.9632 406 25.6842C406 24.754 406.754 24 407.684 24H409V23C409 21.3431 410.343 20 412 20H412.6C413.51 18.2192 415.363 17 417.5 17C420.538 17 423 19.4624 423 22.5C423 23.02 422.928 23.5232 422.793 24H423.316C424.246 24 425 24.754 425 25.6842C425 26.9632 423.963 28 422.684 28H408.316Z" fill="#FFFDFC" />
                </g>
                <defs>
                    <filter id="filter0_d_126_195" x="0" y="0" width="429" height="50" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_126_195" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_126_195" result="shape" />
                    </filter>
                </defs>
            </animated.svg>
        </Container>
    )
}