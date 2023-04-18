/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function About() {
  const values = [
    {
      id: 1,
      name: 'Vegetarian Mini Spring Rolls ( 10 pcs )',
      description: `They ain't summer rolls!`,
      price: 12.0,
      stock: 40,
      image_url: 'vegetarian-mini-spring-rolls.jpeg',
      category_id: 1,
    },
    {
      id: 2,
      name: 'Vegetarian Mini Samosas ( 10 pcs )',
      description: ``,
      price: 12.0,
      stock: 40,
      image_url: 'vegetarian-mini-samosas.jpeg',
      category_id: 1,
    },
    {
      id: 3,
      name: 'Deep Fried Vegetarian Dumplings ( 10 pcs )',
      description: ``,
      price: 13.0,
      stock: 40,
      image_url: 'deep-fried-dumplings.jpeg',
      category_id: 1,
    },

    {
      id: 4,
      name: 'Thai Fried Rice',
      description: `Thai style stir fried rice with Choice of Meat and Vegetables`,
      price: 18.8,
      stock: 40,
      image_url: 'thai-fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 5,
      name: 'Fried Rice',
      description: ``,
      price: 18.8,
      stock: 40,
      image_url: 'fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 6,
      name: 'Nasi Goreng',
      description: `Stir fried choice of meat, rice, mixed vegetables and sambal chilli.`,
      price: 18.8,
      stock: 20,
      image_url: 'nasi-goreng.jpeg',
      category_id: 2,
    },
    {
      id: 7,
      name: 'Nasi Goreng + Fried Egg',
      description: `Stir fried choice of meat with egg, rice, mixed vegetables and sambal chilli.`,
      price: 20.8,
      stock: 20,
      image_url: 'nasi-goreng-fried-egg.jpeg',
      category_id: 2,
    },
    {
      id: 8,
      name: 'Prawns Fried Rice',
      description: ``,
      price: 21.8,
      stock: 25,
      image_url: 'prawns-fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 9,
      name: 'Duck Fried Rice',
      description: ``,
      price: 21.8,
      stock: 20,
      image_url: 'duck-fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 10,
      name: 'Crispy Pork Fried Rice',
      description: ``,
      price: 21.8,
      stock: 30,
      image_url: 'crispy-pork-fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 11,
      name: 'Spicy Fried Rice',
      description: ``,
      price: 18.8,
      stock: 20,
      image_url: 'spicy-fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 12,
      name: 'Pineapple Fried Rice',
      description: `Stir fried choice of meat, egg, rice, vegetables, pineapple and cashew nuts`,
      price: 19.8,
      stock: 20,
      image_url: 'pineapple-fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 13,
      name: 'Tom Yum Fried Rice',
      description: ``,
      price: 18.8,
      stock: 20,
      image_url: 'tom-yum-fried-rice.jpeg',
      category_id: 2,
    },

    {
      id: 14,
      name: 'Fried Rice With Cashew Nuts',
      description: ``,
      price: 19.8,
      stock: 20,
      image_url: 'fried-rice-with-cashew-nuts.jpeg',
      category_id: 2,
    },
    {
      id: 15,
      name: 'Vegetarian Fried Rice',
      description: `Stir fried rice, mixed vegetables, soya sauce without egg.`,
      price: 18.8,
      stock: 20,
      image_url: 'vegetarian-fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 16,
      name: 'Tofu Fried Rice',
      description: `Stir fried tofu with egg, rice, mixed vegetables and soya sauce.`,
      price: 18.8,
      stock: 20,
      image_url: 'tofu-fried-rice.jpeg',
      category_id: 2,
    },
    {
      id: 17,
      name: 'Pad Thai',
      description: ``,
      price: 18.8,
      stock: 40,
      image_url: 'pad-thai.jpeg',
      category_id: 3,
    },
    {
      id: 18,
      name: 'Pad Thai Duck',
      description: ``,
      price: 21.8,
      stock: 40,
      image_url: 'pad-thai-duck.jpeg',
      category_id: 3,
    },
    {
      id: 19,
      name: 'Kuey Teow Goreng Duck',
      description: ``,
      price: 21.8,
      stock: 40,
      image_url: 'kuey-teow-goreng-duck.jpeg',
      category_id: 3,
    },
    {
      id: 20,
      name: 'Chow Mein',
      description: `Yellow noodle and vegetables.`,
      price: 18.8,
      stock: 40,
      image_url: 'chow-mein.jpeg',
      category_id: 3,
    },
    {
      id: 21,
      name: 'Singapore Noodles',
      description: ``,
      price: 18.8,
      stock: 40,
      image_url: 'singapore-noodles.jpeg',
      category_id: 3,
    },
    {
      id: 22,
      name: 'Mee Goreng',
      description: `Yellow noodles, egg, carrot, cabbage and bean sprouts.`,
      price: 18.8,
      stock: 40,
      image_url: 'mee-goreng.jpeg',
      category_id: 3,
    },
    {
      id: 23,
      name: 'Tom Yum Fried Noodles',
      description: `Yellow noodles, tom yum flavour and vegetables.`,
      price: 18.8,
      stock: 40,
      image_url: 'tom-yum-fried-noodles.jpeg',
      category_id: 3,
    },
    {
      id: 24,
      name: 'Satay Noodles',
      description: `Yellow noodles, vegetables, peanuts sauce and your choice of meat`,
      price: 18.8,
      stock: 40,
      image_url: 'satay-noodles.jpeg',
      category_id: 3,
    },
    {
      id: 25,
      name: 'Cashew Nuts Noodles',
      description: `Yellow noodles, chilli paste and vegetables.`,
      price: 19.8,
      stock: 40,
      image_url: 'cashew-nuts-noodles.jpeg',
      category_id: 3,
    },
    {
      id: 26,
      name: 'Drunken Noodles (Pad Kee Mao)',
      description: `Stir fried rice noodles with choice of meat, chilli, garlic and basil leaves.`,
      price: 18.8,
      stock: 40,
      image_url: 'drunken-noodles.jpeg',
      category_id: 3,
    },
    {
      id: 27,
      name: 'Char Kuey Teow',
      description: `Flat rice noodles, egg, carrot, cabbage, bean sprouts with sambal chilli`,
      price: 18.8,
      stock: 40,
      image_url: 'char-kuey-teow.jpeg',
      category_id: 3,
    },
    {
      id: 28,
      name: 'Pad See Ew',
      description: `Flat rice noodles, dark soy sauce, egg, vegetables`,
      price: 18.8,
      stock: 40,
      image_url: 'pad-see-ew.jpeg',
      category_id: 3,
    },
    {
      id: 29,
      name: 'Fried Kuey Teow',
      description: `Flat rice noodles, egg, carrot, cabbage and bean sprouts.`,
      price: 18.8,
      stock: 40,
      image_url: 'fried-kuey-teow.jpeg',
      category_id: 3,
    },
    {
      id: 30,
      name: 'Kuey Teow Goreng',
      description: ``,
      price: 18.8,
      stock: 40,
      image_url: 'kuey-teow-goreng.jpeg',
      category_id: 3,
    },
    {
      id: 31,
      name: 'Coke',
      description: `Non-Alcoholic`,
      price: 4.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 32,
      name: 'Diet Coke',
      description: `Non-Alcoholic`,
      price: 4.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 33,
      name: 'Coke Zero',
      description: `Non-Alcoholic`,
      price: 4.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 34,
      name: 'Sprite',
      description: `Non-Alcoholic`,
      price: 4.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 35,
      name: 'Fanta Orange',
      description: `Non-Alcoholic`,
      price: 4.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 36,
      name: 'Raspbery Coke',
      description: 'Non-Alcoholic',
      price: 4.5,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 37,
      name: 'Raspbery Lemonade',
      description: 'Non-Alcoholic',
      price: 4.5,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 38,
      name: 'Ginger Beer',
      description: 'Non-Alcoholic',
      price: 5.5,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 39,
      name: 'Lemon Lime Bitters',
      description: 'Non-Alcoholic',
      price: 5.5,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 40,
      name: 'Thai Mike Tea',
      description: 'Non-Alcoholic',
      price: 6.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 41,
      name: 'Coconut Water',
      description: 'Non-Alcoholic',
      price: 6.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 42,
      name: 'Mocktail',
      description: 'Non-Alcoholic',
      price: 8.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 43,
      name: 'Orange Juice',
      description: 'Juice',
      price: 5.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 44,
      name: 'Apple Juice',
      description: 'Juice',
      price: 5.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 45,
      name: 'Pineapple Juice',
      description: 'Juice',
      price: 5.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 46,
      name: 'Peach Soju',
      description: 'Soju',
      price: 14.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 47,
      name: 'GreenGrape Soju',
      description: 'Soju',
      price: 14.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 48,
      name: 'Strawberry Soju',
      description: 'Soju',
      price: 14.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 49,
      name: 'Watermelon Soju',
      description: 'Soju',
      price: 14.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 50,
      name: 'Pineapple Soju',
      description: 'Soju',
      price: 14.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 51,
      name: 'Singha',
      description: 'Beer',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 52,
      name: 'Chang',
      description: 'Beer',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 53,
      name: 'Heineken Light',
      description: 'Beer',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 54,
      name: 'Heineken',
      description: 'Beer',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 55,
      name: 'Tiger',
      description: 'Beer',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 56,
      name: 'Asahi',
      description: 'Beer',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 57,
      name: 'Corona',
      description: 'Beer',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 58,
      name: 'Merlot Cabernet',
      description: 'Red Wines',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 59,
      name: 'Shiraz',
      description: 'Red Wines',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 60,
      name: 'Piont Noir',
      description: 'Red Wines',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 61,
      name: 'Sauvignon Blanc',
      description: 'White Wines',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },

    {
      id: 62,
      name: 'Chardonnay',
      description: 'White Wines',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
    {
      id: 63,
      name: 'Pinor Gris',
      description: 'White Wines',
      price: 9.0,
      stock: 40,
      image_url: '',
      category_id: 4,
    },
  ]

  return (
    <div className="bg-white dark:bg-zinc-900">
      <div className="max-w-4xl flex items-center h-auto lg:h-full flex-wrap mx-auto py-52">
        {/* <!--Main Col--> */}
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* <!-- Image for mobile view--> */}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-scarlet-500"
              style={{
                backgroundImage: './images/logo/pokpok_logo.png',
              }}
            ></div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">PokPok</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-burgundy-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text--burgundy-500 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>{' '}
              Modern Thai Restaurant And Bar
            </p>
            <p className="pt-2 text-gray-600 text-sm lg:text-base flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-burgundy-500 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>{' '}
              261 Karangahape Road, Auckland CBD, Auckland 1010
            </p>
            <p className="pt-2 text-gray-600 text-sm lg:text-base flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-burgundy-500 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <g>
                  <path
                    d="M71.224,0C31.951,0,0,31.951,0,71.224s31.951,71.224,71.224,71.224s71.224-31.951,71.224-71.224
		S110.496,0,71.224,0z M71.224,127.447C40.222,127.447,15,102.226,15,71.224S40.222,15,71.224,15s56.224,25.222,56.224,56.224
		S102.226,127.447,71.224,127.447z"
                  />
                  <path
                    d="M100.923,72.016H71.724V46.724c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v32.792
		c0,4.143,3.357,7.5,7.5,7.5h36.699c4.143,0,7.5-3.357,7.5-7.5S105.065,72.016,100.923,72.016z"
                  />
                </g>
              </svg>
              Open Hours: 5:30pm - 10:00pm (Mon - Sun)
            </p>
            <p className="pt-8 text-base font-bold">
              “POKPOK” IS AN AUTHENTIC THAI CUISINE WITH A DIFFERENCE.
            </p>
            <p className="pt-8 text-base">
              We were inspired to establish ‘POKPOK’ with unique Thai cuisine.
              Using well-known authentic Thai cooking combined with modern
              Western menus to bring something new to Auckland dinners. Our menu
              is constantly evolving like a culinary tour of Thailand, ranging
              from dishes influenced by the north, northeast, middle and south
              of Thailand. Everyday, we strive to deliver authentic street food
              to our customers, using only the freshest, premium quality
              ingredients sourced locally. Everything we do, we do it with love.
              We want all our customers to leave with wonderful memories, having
              enjoyed some new dishes or flavours.
            </p>

            <div className="pt-12 pb-8">
              <button className="bg-burgundy-500 hover:bg-burgundy-900 text-beige-500 font-bold py-2 px-4 rounded-full">
                Get In Touch
              </button>
            </div>

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="#"
                data-tippy-content="@facebook_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
              <a
                className="link"
                href="#"
                data-tippy-content="@instagram_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-green-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!--Img Col--> */}
        <div className="w-full lg:w-2/5 bg-black-400">
          {/* <!-- Big profile image for side bar (desktop) --> */}
          <img
            src="./images/logo/pokpok_logo.png"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
            alt="profile"
          />
        </div>
      </div>
    </div>
  )
}
