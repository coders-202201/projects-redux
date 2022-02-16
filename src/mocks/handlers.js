import { rest } from "msw";

const handlers = [
  rest.get(process.env.REACT_APP_API_URL, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Cocktails 4 All",
          group: "API Coders",
          stats: {
            coverage: 91.5,
            technicalDebtMinutes: 0,
          },
        },
        {
          id: 2,
          name: "WeeklyMenu",
          group: "WeeklyMenuIng",
          stats: {
            coverage: 94.2,
            technicalDebtMinutes: 2,
          },
        },
      ])
    )
  ),
  rest.delete(`${process.env.REACT_APP_API_URL}10`, (req, res, ctx) =>
    res(ctx.status(404))
  ),
  rest.delete(`${process.env.REACT_APP_API_URL}:id`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  ),
  rest.post(process.env.REACT_APP_API_URL, (req, res, ctx) =>
    res(
      ctx.status(201),
      ctx.json({
        id: 90,
        name: "Marta's project",
        group: "Marta crew",
      })
    )
  ),
  rest.put(`${process.env.REACT_APP_API_URL}:id`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        id: 90,
        name: "Marta's project",
        group: "Marta's friends",
      })
    )
  ),
];

export default handlers;
