const menu = [
    {
        id: 1,
        title: 'Burricaballo',
        category: 'comidas',
        price: '8.000',
        img: [
            './images/burrito.jpg',
            './images/burrito_2.jpg',
            './images/burrito_3.jpg'
        ],
        desc: `Enorme burrito que parece un caballo! Consiste de una\
                tortilla de harina de trigo rellenada con codillo de cerdo, \
                chorizo, queso, pico de gallo, arroz con granos y\
                salsa tartara.`,
    },
    {
        id: 2,
        title: 'Hamburguesa de pollo',
        category: 'comidas',
        price: '8.500',
        img: ['./images/hamburguesa.jpg'],
        desc: `Deliciosa hamburguresa de pollo, como para chuparse\
                los dedos. Viene con tocino, queso mozzarella, cebolla\
                caramelizada, papitas fritas y salsa de la casa.`,
    },
    {
        id: 3,
        title: 'alitas de pollo',
        category: 'comidas',
        price: '10.000',
        img: ['./images/alitas.jpg'],
        desc: `Jugosas alitas de pollo con un sabor unico. Puede pedirlas\
                de salsa barbacoa, salsa honey garlic, salsa buffalo, o \
                normales.`,
    },
    // {
    //     id: 4,
    //     title: 'Lasagna de carne',
    //     category: 'comidas',
    //     price: '10,000',
    //     img: './images/pancitos.jpg',
    //     desc: `Una magnifica obra de arte; esta lasagna contiene carne molida, \
    //             chicharron, salsa bolagnesa hecha en casa, y queso mozzarella`,
    // },
    {
        id: 5,
        title: 'Brownie con helado de vainilla y glaseado',
        category: 'postres',
        price: '4.000',
        img: ['./images/brownie.jpg'],
        desc: `Un riquisimo postre para matar el antojo,\
        disfrutalo sol@ o compartelo.`,
    },
    {
        id: 6,
        title: 'pancitos de queso',
        category: 'aperitivos',
        price: '4.000',
        img: ['./images/pancitos.jpg'],
        desc: `Pancitos de ajo cubiertos con queso mozzarella para alegrar\
        el estomago.`,
    },
    {
        id: 7,
        title: 'rollos de canela',
        category: 'aperitivos',
        price: '2.000',
        img: ['./images/cynnamon_roles.jpg'],
        desc: `Delicioso pan de canela. Frescos y calintitos a la entrega!`,
    },
    {
        id: 8,
        title: 'malteadas',
        category: 'kalimalteadas',
        price: '5.500',
        tipos: [
            {name: 'frutos rojos', img: './images/malteada-frutos-rojos.jpeg', id: 8.1},
            {name: 'guanabana', img: './images/malteada-guanabana.jpg', id: 8.2},
            {name: 'cafe con arequipe', img: './images/malteada-cafe.jpg', id: 8.3},
            {name: 'chocolate', img: './images/malteada-chocolate.jpg', id: 8.4},
        ]
        ,
        desc: `Deleitable malteada para matar el antojo y alegrar el alma.`,
    },
    {
        id: 12,
        title: 'pizza',
        category: 'comidas',
        img: [
            './images/pizza_jamon_pollo_pina.jpg',
            './images/pizza.jpg',
            './images/pizza_mais_con_salchicha_ranchera.jpg',
            './images/pizza_con_lechuga_maiz_jamon.jpg'
        ],
        tipos: [
            {name: 'Pizza de jamon y queso', price: "13.000", id: 12.1},
            {name: 'Pizza de salami y queso', price: "13.000", id: 12.2},
            {name: 'Pizza de pollo y queso', price: "14.000", id: 12.3},
            {name: 'Pizza de bocadillo y queso', price: "13.000", id: 12.4},
            {name: 'Pizza de ajo, cebolla y queso', price: "13.000", id: 12.5},
            {name: 'Pizza de salami y maiz', price: "13.000", id: 12.6},
            {name: 'Pizza de jamon y maiz', price: "13.000", id: 12.7},
            {name: 'Pizza de pollo y maiz', price: "13.000", id: 12.8},
            {name: 'Pizza de pollo y champiñones', price: "14.000", id: 12.9},
            {name: 'Pizza de salami y champiñones', price: "13.000", id: 12.11},
            {name: 'Pizza de jamon y champiñones', price: "13.000", id: 12.12},
            {name: 'Pizza tres carnes (Pollo, Jamon, Salami)', price: "14.500", id: 12.13},
            {name: 'Pizza Hawaiana', price: "13.000", id: 12.14},
            {name: 'Pizza Hawaiana especial (con pollo)', price: "14.000", id: 12.15},
            {name: 'Queso y salami', price: "13.000", id: 12.16},
        ],
        desc: `Prueba los sabores premium por un adicional de 3.000 COP: 1) Mexicana, \
                (carne molida, nachos, picadilla de cilantro, cebollin y lechuga,\
                2) Especial (pollo, salami, jamon, cebolla, pimenton), 3) Ranchera\
                (salchicha ranchera, cebolla, pimenton, maiz). Tambien puedes agregar\
                adicionales: cualquier vegetal (1.000 COP), cualquier carne (2,000 COP),\
                borde de queso (2.000 COP), borde de bocadillo (2.000 COP), picadillo de\
                cilantro, cebollin y lechuga (1.000 COP).`
    },

    ];
    export default menu;
