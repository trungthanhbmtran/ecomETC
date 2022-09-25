
export const menu = [
  {
    title: "Trang Chủ",
    url: "/"
  },
  {
    title: "Giới thiệu",
    url: "/aboutus"
  },
  {
    title: "Dịch vụ - Sản phẩm",
    submenu: [
      {
        title: "Dịch vụ",
        submenu: [
          {
            title: "Dịch vụ điện",
          },
          {
            title: "Dịch vụ Thử nghiệm",
          },
          {
            title: "Dịch vụ CNTT",
          },
        ]
      },
      {
        title: "Sản phẩm",
        submenu: [
          {
            title: "Sản phẩm điện",
          },
          {
            title: "Charts & Chart Patterns",
          },
          {
            title: "Trend & Trend Lines",
          },
          {
            title: "Support & Resistance",
          }
        ]
      },
    ]
  },
  {
    title: "Tài liệu",
    submenu: [
      {
        title: "Điện",
        url: "/document/1"
      },
      {
        title: "CNTT",
        url: "/document/2"
      },
    ]
  },
  {
    title: "Tin tức - Tuyển dụng",
    url :'/news'
  },
  {
    title: "Liên hệ",
    url :'/contact'
  }
];
