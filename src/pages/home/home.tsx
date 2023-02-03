import { createRoute } from "atomic-router";
import { attach, createEffect, createStore, restore } from "effector";
import React from "react";
import s from "./home.module.scss";

const mockList = [1, 2, 3, 4];
const $store = createStore(8900)

const originalFx = createEffect((params: any) => {
  console.log("Original effect called with", params);

  return [1,2,3,4]
});

const newFx = attach({
  effect: originalFx,
  // source: $store,
  // mapParams: (params, data) => {
  //   console.log('Created effect called with', params)
  //   return {wrapped: params, data}
  // }
})

const $posts = restore(newFx, []);

$posts.watch(s => console.log('s:', s))
console.log('!!!')

const Page: React.FC = () => {
  React.useEffect(() => {
    (async () => {
      const res = await newFx('PARAMS DATA')
      console.log(res)
    })()
  }, [])

  return (
    <div className={s["container"]}>
      <div className={s["todo-form"]}>
        <label className={s["todo-name-label"]}>
          <span>Название дела</span>
          <input type="text" name="" id="" />
        </label>
        <button>Добавить</button>
      </div>

      <section className={s["todo-list_container"]}>
        <span>Список дел</span>
        <ul className={s["todo-list"]}>
          {mockList.map((item, idx) => (
            <li className={s["todo-list_item"]} key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export const Home = {
  route: createRoute(),
  page: Page,
};
