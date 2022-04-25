export default {
    mode: {
        downUp: {
            hidden: {
                opacity: 0,
                y: '100vh',
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    stiffness: 30,
                    delay: 0.1,
                },
            },
        },
        leftRight: {
            hidden: {
                opacity: 0,
                x: '-100vw',
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring',
                    stiffness: 50,
                    delay: 0.1,
                },
            },
        },
        rightLeft: {
            hidden: {
                opacity: 0,
                x: '200vw',
            },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    type: 'spring',
                    stiffness: 50,
                    delay: 0.1,
                },
            },
        },
    },
};
