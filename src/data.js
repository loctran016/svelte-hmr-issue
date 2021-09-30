import main from "./data/main.json";

for (const i in main) {
  main[i].id = i;
}

export { main };
