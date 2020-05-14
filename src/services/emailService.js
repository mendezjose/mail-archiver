import moment from "moment";

const emailService = [
  {
    Id: 1,
    From: "aaa@example.com",
    To: ["zzz@example.com"],
    Subject: "[ HR-888 ] Notice of official announcement",
    Date: new moment(),
    Att: false,
    Body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    Id: 2,
    From: "bbb@example.com",
    To: ["yyy@example.com"],
    Subject: `[web:333] "Web Contact"`,
    Date: new moment().subtract(3, "days"),
    Att: true,
    Body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    Id: 3,
    From: "ccc@example.com",
    To: ["xxx@example.com", "www@example.com"],
    Subject: "Happy New Year! Greetings for the New Year.",
    Date: new moment().subtract(10, "days"),
    Att: false,
    Body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    Id: 4,
    From: "ddd@example.com",
    To: ["vvv@example.com", "uuu@example.com"],
    Subject:
      "[HR-887(Revised: Office Expansion Project Team)] Notice of office expansion project team",
    Date: new moment().subtract(15, "days"),
    Att: false,
    Body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    Id: 5,
    From: "eee@example.com",
    To: ["sss@example.com", "rrr@example.com", "ttt@example.com"],
    Subject: `[Github] Logout page`,
    Date: new moment().subtract(22, "days"),
    Att: true,
    Body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    Id: 6,
    From: "fff@example.com",
    To: ["qqq@example.com"],
    Subject: "［dev］ Postfix 3.1.12 / 3.2.9 / 3.3.4 / 3.4.5",
    Date: new moment().subtract(23, "days"),
    Att: false,
    Body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    Id: 7,
    From: "ggg@example.com",
    To: ["ppp@example.com"],
    Subject: "Re: [Github] Brush-up on loading animation",
    Date: new moment().subtract(45, "days"),
    Att: false,
    Body:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

export const lastEmailDate = () => {
  if (!emailService.length) return moment();

  const last = emailService.reduce((a, c) => {
    return c.Date < a.Date ? c : a;
  });

  return last.Date;
};

export default emailService;
