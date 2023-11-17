const ul = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelector("button");
const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
        <div class="title">${recipe.title}</div>
        <div>${time}</div>
        <button class="btn btn-danger btn-sm my-2 text-capitalize text-white fw-bold">delete</button>
    </li>
    `;
  //   console.log(html);
  ul.innerHTML += html;
};
// get documents
// db.collection("recipes")
//   .get()
//   .then((snapshot) => {
//     // when we have the data
//     snapshot.forEach((doc) => {
//       console.log(doc.data());
//       //   console.log(doc);
//       addRecipe(doc.data(), doc.id);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};
// everytime collection changes firestore get snapshot of collections in that moment in time
const unsub = db.collection("recipes").onSnapshot((snapshot) => {
  console.log(snapshot.docChanges());
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

//   add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  db.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch((err) => {
      console.log(err);
    });
  form.recipe.value = "";
  form.reset();
});

// deleting data

ul.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(e);
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    // console.log(id);
    db.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("recipe deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

// unsubs from database changes
button.addEventListener("click", () => {
  unsub();
  console.log("unsubscribe from collection changes");
});
