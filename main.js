(() => {
  var e = {
      75: () => {
        /*
        const user = fetch(
          "https://nomoreparties.co/v1/plus-cohort-13/users/me",
          { headers: { authorization: "eeb10f4c-568d-4124-bc82-28113d2b839d" } }
        )
          .then(function (e) {
            return e.json();
          })
          .then(function (e) {
            return e;
          });
        const printUser = function () {
          user.then(function (a) {
            console.log(a);
          });
        };
        printUser();
        */
        async function getUser() {
          let response = await fetch(
            "https://nomoreparties.co/v1/plus-cohort-13/users/me",
            { headers: { authorization: "eeb10f4c-568d-4124-bc82-28113d2b839d" } }
          );
          if (response.ok) {
            let data = await response.json();
            console.log(data);
            return data
          } else {
            console.log('error', response.status);
          }
         }
      },
      858: () => {
        var e = ["formSelector"];
        function t(e, t) {
          if (null == e) return {};
          var n,
            r,
            o = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                c = Object.keys(e);
              for (r = 0; r < c.length; r++)
                (n = c[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(e, t);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(e);
            for (r = 0; r < c.length; r++)
              (n = c[r]),
                t.indexOf(n) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, n) &&
                    (o[n] = e[n]));
          }
          return o;
        }
        var n,
          r,
          o,
          c,
          u = {
            formSelector: ".form",
            inputSelector: ".form__item",
            submitButtonSelector: ".form__submit-button",
            inactiveButtonClass: "form__submit-button_disabled",
            inputErrorClass: "form__item_type_error",
          };
        t(u, ["inputSelector"]),
          (r = (n = u).formSelector),
          (o = t(n, e)),
          (c = document.querySelectorAll(r)),
          Array.from(c).forEach(function (e) {
            !(function (e, t) {
              var n = t.inputSelector,
                r = t.submitButtonSelector,
                o = t.inactiveButtonClass,
                c = t.inputErrorClass,
                u = e.querySelectorAll(n),
                a = e.querySelector(r);
              Array.from(u).forEach(function (t) {
                t.addEventListener("input", function () {
                  var n = e.checkValidity();
                  !(function (e, t, n) {
                    var r = !t.validity.valid,
                      o = e.querySelector("#".concat(t.id, "-error"));
                    r
                      ? (function (e, t, n) {
                          (e.textContent = t.validationMessage),
                            t.classList.add(n);
                        })(o, t, n)
                      : (function (e, t, n) {
                          (e.textContent = t.validationMessage),
                            t.classList.remove(n);
                        })(o, t, n);
                  })(e, t, c),
                    (function (e, t, n) {
                      t
                        ? (e.classList.remove(n), (e.disabled = !1))
                        : (e.classList.add(n), (e.disabled = "disabled"));
                    })(a, n, o);
                });
              }),
                e.addEventListener("submit", function (e) {
                  e.preventDefault();
                });
            })(e, o);
          });
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var c = (t[r] = { exports: {} });
    return e[r](c, c.exports, n), c.exports;
  }
  (() => {
    "use strict";
    n(75);
    var e = document.querySelector('[name="avatar-info"]'),
      t = document.querySelector('[name="profile-avatar"]'),
      r = window
        .getComputedStyle(document.querySelector(".profile__avatar"), ":before")
        .getPropertyValue("background-image"),
      o = document.querySelector('[name="profile-info"]'),
      c = document.querySelector('[name="profile-title"]'),
      u = document.querySelector('[name="profile-subtitle"]'),
      a = document.querySelector(".profile__title"),
      i = document.querySelector(".profile__subtitle");
    e.addEventListener("submit", function (e) {
      e.preventDefault(), v(l);
    }),
      o.addEventListener("submit", function (e) {
        e.preventDefault(),
          (a.textContent = c.value),
          (i.textContent = u.value),
          v(s);
      });
    var l = document.querySelector(".popup_avatar"),
      s = document.querySelector(".popup_profile"),
      d = document.querySelector(".popup_place"),
      p =
        (document.querySelector(".popup_opened"),
        function (e) {
          if ("Escape" === e.key) {
            var t = document.querySelector(".popup_opened");
            v(t);
          }
        }),
      m = function (e) {
        e.target.classList.contains("popup_opened") && v(e.target);
      },
      f = function (e) {
        e.classList.add("popup_opened"),
          e.addEventListener("mousedown", m),
          document.addEventListener("keydown", p);
      },
      v = function (e) {
        document.removeEventListener("keydown", p),
          e.removeEventListener("mousedown", m),
          e.classList.remove("popup_opened");
      };
    document
      .querySelector(".profile__avatar")
      .addEventListener("click", function () {
        console.log(r), (t.value = r), f(l);
      }),
      document
        .querySelector(".profile__edit-button")
        .addEventListener("click", function () {
          (c.value = a.textContent), (u.value = i.textContent), f(s);
        }),
      document
        .querySelector(".profile__add-button")
        .addEventListener("click", function () {
          return f(d);
        });
    var y = document.querySelector(".popup_image"),
      _ = y.querySelector(".popup__pic"),
      S = document.querySelector(".popup__pic-caption");
    document.querySelectorAll(".popup").forEach(function (e) {
      e.addEventListener("click", function (t) {
        t.target.classList.contains("popup__close-button") && v(e);
      });
    });
    var b = document.querySelector('[name="element-creation"]'),
      q = document.querySelector(".elements__list"),
      k = document
        .querySelector("#element-template")
        .content.querySelector(".element"),
      g = document.querySelector("#element-title"),
      L = document.querySelector("#element-image"),
      h = function (e) {
        var t = k.cloneNode(!0),
          n = t.querySelector(".element__name"),
          r = t.querySelector(".element__image"),
          o = t.querySelector(".element__bin"),
          c = t.querySelector(".element__like");
        return (
          (n.textContent = e.name),
          (r.src = e.link),
          (r.alt = e.name),
          r.addEventListener("click", function () {
            return (function (e) {
              return (
                (_.src = e.link),
                (_.alt = e.name),
                (S.textContent = e.name),
                f(y),
                e
              );
            })(e);
          }),
          o.addEventListener("click", function () {
            return t.remove();
          }),
          c.addEventListener("click", function () {
            return c.classList.toggle("element__like_active");
          }),
          t
        );
      };
    [
      {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
      },
      {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
      },
      {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
      },
      {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
      },
      {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
      },
      {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
      },
    ].forEach(function (e) {
      var t, n;
      (t = q), (n = h(e)), t.append(n);
    }),
      b.addEventListener("submit", function (e) {
        e.preventDefault();
        var t = { name: g.value, link: L.value },
          n = h(t);
        q.prepend(n), b.reset();
        var r = b.querySelector(".form__submit-button_create-element");
        r.classList.add("form__submit-button_disabled"),
          (r.disabled = "disabled"),
          v(d);
      }),
      n(858);
  })();
})();
