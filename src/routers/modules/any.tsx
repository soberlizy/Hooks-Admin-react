import React from "react";
import lazyLoad from "@/routers/utils/lazyLoad";
import { LayoutIndex } from "@/routers/constant";
import { RouteObject } from "@/routers/interface";

// 超级表格模块
const anyRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "任意的"
		},
		children: [
			{
				path: "/any/studyDemo",
				element: lazyLoad(React.lazy(() => import("@/views/any/studyDemo/index"))),
				meta: {
					requiresAuth: true,
					title: "demo",
					key: "demo"
				}
			}
		]
	}
];

export default anyRouter;
