"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Merchants",
      [
        {
          name: "Burgerax - Cokrodiningratan",
          category: "Burgers",
          avg_rating: 4.8,
          is_currently_promo: true,
          distance: 3.2,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-CZKKUEXFAGMCV2/hero/0ac7637dad304f0fa262eb07eb4e6753_1595307634274428637.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ethikopia - Sendangadi",
          category: "Coffee",
          avg_rating: 4.7,
          is_currently_promo: true,
          distance: 2.2,
          thumbnail_url:
            "https://brandnesia.com/wp-content/uploads/2017/09/60660676_2830583817013508_1346603303119813793_n.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Burger King - Jogja City Mall",
          category: "Burgers",
          avg_rating: 4.7,
          is_currently_promo: true,
          distance: 1.4,
          thumbnail_url:
            "https://cdn-2.tstatic.net/pontianak/foto/bank/images/promo-burger-king-maret-2021-terbaru-menu-burger-king-apa-saja-yang-ada-harga-diskon-pekan-ini.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Seblak Gila Cabang Palagan - Sariharjo",
          category: "Seblak",
          avg_rating: 4.1,
          is_currently_promo: true,
          distance: 0.4,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-CZEXJZKWL26CGE/hero/9853ac0987514da997b18041bba3c1a3_1589445933612671633.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sate Taichan Senayan - Brontokusuman",
          category: "Satay",
          avg_rating: 4.8,
          is_currently_promo: true,
          distance: 8.9,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/IDGFSTI00001j9i/hero/352123cb9b34490cb3c35b245ac95714_1625038625666997968.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sebelas Coffee - Monjali",
          category: "Coffee",
          avg_rating: 4.9,
          is_currently_promo: true,
          distance: 1.7,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/IDGFSTI000037p2/hero/30b8618b88dc47e3a7f93534a5a8ce7f_1570096399130777161.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Donking Kebab & Burger - Kledokan",
          category: "Kebabs",
          avg_rating: 4.7,
          is_currently_promo: true,
          distance: 2,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/IDGFSTI00000y7g/hero/9d9748c1b3de4694a71a6813655a12c0_1572167591755311759.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sun Rice Bowl - Condong Catur",
          category: "Rice",
          avg_rating: 4.6,
          is_currently_promo: true,
          distance: 1.8,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/items/IDITE2020061101594466075/photo/menueditor_item_320ade353fdf455fae1e2ef002a64e43_1591840530012636973.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dum Thai Tea - Prawirotaman",
          category: "Tea",
          avg_rating: 4.5,
          is_currently_promo: false,
          distance: 8.8,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-CYX3VRJXG8N2LE/hero/ddac4475fe0e4a0a8f4a3c96ef9d3e9b_1571475681196143415.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dapur Tsaba - Keparakan",
          category: "Snack, Beef",
          avg_rating: 5,
          is_currently_promo: true,
          distance: 9.2,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-C2MZATMER3JDR2/hero/d623d8b84b90478e80b7ad73c9bce9cf_1617702197308563537.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Koki Keren - Mantrijeron",
          category: "Fried Chicken, Korean",
          avg_rating: 4.9,
          is_currently_promo: true,
          distance: 9.7,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-C2LTVKJJJ7XTV2/hero/b6a20973406c4ec388480b6eea25f4d7_1615727333591646850.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Sate Padang Pariaman Ajo Paris - Condong Catur",
          category: "Satay",
          avg_rating: 5,
          is_currently_promo: false,
          distance: 4.3,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-C2XFNY2ZN23YEE/hero/779effd3d87b41e7825515c84545b50e_1628668011338277632.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Couvee - Jakal",
          category: "Coffee",
          avg_rating: 4.9,
          is_currently_promo: false,
          distance: 3.8,
          thumbnail_url:
            "https://b.zmtcdn.com/data/pictures/2/18954042/e57eea15f8d851e70850dfcc395b324e_featured_v2.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Martabak Sinar Jaya Tegal LBS - Sari Harjo",
          category: "Martabak",
          avg_rating: 4.7,
          is_currently_promo: true,
          distance: 1.8,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-CZNUE26XEJ2VR2/hero/1a27173614784231a8e24b7b6d871d04_1599126394239568794.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Popang Osaka Boba Tea - Caturtunggal",
          category: "Beverages",
          avg_rating: 4.6,
          is_currently_promo: true,
          distance: 2.9,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-CZNFALC1UA4YGE/hero/16f5462759ad40519969702f4e3ad69d_1600327373508419718.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Nomojowo - Caturtunggal",
          category: "Fried Chicken",
          avg_rating: 3.9,
          is_currently_promo: true,
          distance: 3.0,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-CZMYLKEXGKDATE/hero/8e2e10ff855d437ca23f665fad6af19a_1613804873414724631.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Salad Nyoo - Tugu",
          category: "Desserts",
          avg_rating: 4.6,
          is_currently_promo: true,
          distance: 4.4,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/AWjsGbNecEjWIUmPsruq/hero/09dad14e59984894a08a2ff78a0a2555_1630289721693814988.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Laju Kopi Cepat - Caturtunggal",
          category: "Coffee",
          avg_rating: 4.9,
          is_currently_promo: true,
          distance: 4.2,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/IDGFSTI00003g2i/hero/c2bdacc42900491697b833ec0a5e9e4f_1597411810756557022.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Morgans Kebab - Sinduadi",
          category: "Kebabs",
          avg_rating: 4.3,
          is_currently_promo: false,
          distance: 6.2,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-C2MTWBMYRAWTUA/hero/ba89732edd4c4bc482d56d5cbde76704_1617098862202994870.jpeg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "HAUS! - Palagan",
          category: "Beverages",
          avg_rating: 4.7,
          is_currently_promo: true,
          distance: 5.2,
          thumbnail_url:
            "https://d1sag4ddilekf6.azureedge.net/compressed/merchants/6-C2TGJP63MF5FVA/hero/bf389711a9064335a1a14617dbf0a434_1629260711275450541.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Merchants", null, {});
  },
};
