
const products = [
    {
        url: "https://somelink.com",
        imageUrl: "project2-1.png",
        imageAlt: "Countertop / wall-hung rectangular MILANO 50 matte concrete sink",
        title: "Countertop / wall-hung rectangular MILANO 50 matte concrete sink",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dicta eius inventore iste iusto laudantium libero, perspiciatis quam quas ratione sapiente, ut vero voluptate.",
        price: 240
    },
    {
        url: "https://somelink.com",
        imageUrl: "project2-2.png",
        imageAlt: "Wall-hung rectangular MILANO 50",
        title: "Wall-hung rectangular MILANO 50",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dicta eius inventore iste iusto laudantium libero, perspiciatis quam quas ratione sapiente, ut vero voluptate.",
        price: 175
    },
    {
        url: "https://somelink.com",
        imageUrl: "project2-3.png",
        imageAlt: "Name wall-hung rectangular MILANO 50",
        title: "Name wall-hung rectangular MILANO 50",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dicta eius inventore iste iusto laudantium libero, perspiciatis quam quas ratione sapiente, ut vero voluptate.",
        price: 300
    },
    {
        url: "https://somelink.com",
        imageUrl: "project2-4.png",
        imageAlt: "Countertop / wall-hung rectangular MILANO 100 matte concrete sink",
        title: "Countertop / wall-hung rectangular MILANO 100 matte concrete sink",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dicta eius inventore iste iusto laudantium libero, perspiciatis quam quas ratione sapiente, ut vero voluptate.",
        price: 550
    },
    {
        url: "https://somelink.com",
        imageUrl: "project2-5.png",
        imageAlt: "Countertop / wall-hung rectangular MILANO 50 matte concrete sink - wall-hung rectangular matte concrete sink",
        title: "Countertop / wall-hung rectangular MILANO 50 matte concrete sink - wall-hung rectangular matte concrete sink",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dicta eius inventore iste iusto laudantium libero, perspiciatis quam quas ratione sapiente, ut vero voluptate.",
        price: 220
    },
    {
        url: "https://somelink.com",
        imageUrl: "project2-6.png",
        imageAlt: "Countertop / wall-hung rectangular MILANO 50 matte concrete sink - wall-hung rectangular matte concrete sink",
        title: "Countertop / wall-hung rectangular MILANO 50 matte concrete sink - wall-hung rectangular matte concrete sink",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa dicta eius inventore iste iusto laudantium libero, perspiciatis quam quas ratione sapiente, ut vero voluptate.",
        price: 400
    },
];

const data = [
    {
        tagName: "section",
        attrs: {
            class: "shop-section",
        },
        children: [
            {
                tagName: "header",
                attrs: {
                    class: "header"
                },
                children: [
                    {
                        tagName: "img",
                        attrs: {
                            src: "images/f82de1a7f4fbc29bf7a4549eebb94189.png",
                            alt: "Header image"
                        },
                    },
                    {
                        tagName: "h2",
                        content: "Online Shop"
                    },
                ]
            },
            {
                tagName: "div",
                attrs: {
                    class: "container",
                },
                children: [
                    {
                        tagName: "div",
                        attrs: {
                            class: "products"
                        },
                        children: products.map(prod => ({
                            tagName: "a",
                            attrs: {
                                class: "product",
                                href: prod.url
                            },
                            children: [
                                {
                                    tagName: "img",
                                    attrs: {
                                        src: "images/" + prod.imageUrl,
                                        alt: prod.imageAlt,
                                        class: "product__img"
                                    }
                                },
                                {
                                    tagName: "h3",
                                    content: prod.title,
                                },
                                {
                                    tagName: "p",
                                    content: prod.desc,
                                },
                                {
                                    tagName: "p",
                                    attrs: {
                                        class: "product__price"
                                    },
                                    content: prod.price + "$",
                                }
                            ]
                        }))
                    }
                ]
            },
            {
                tagName: "footer",
                attrs: {
                    id: "footer",
                    class: "footer"
                },
                content: "Copyright"
            }
        ],
    }
];

const root = document.getElementById("root");

loop(data, root)

function loop(arr, parent){
    arr.forEach(d => {
        const el = createElement(d);

        if(d.children?.length){
            loop(d.children, el)
        }
        parent.append(el)
    })
}

function createElement(obj){
    const el = document.createElement(obj.tagName);
    for(let attr in obj?.attrs){
        el.setAttribute(attr, obj.attrs[attr])
    }

    el.innerHTML = obj.content ? obj.content : '';

    return el
}
