import style from "./styles.module.css";

import { Link } from "react-router-dom";



const NavBar = () => {


  // const handleFilterSelectChange = (filterVideogame) => {
  //   const { gender, order, filter } = filterVideogame;
    
  //   dispatch(getFilteredVideoGames(gender, order, filter)); // Dispatch the action with the selected filter values
  // };

    return (
    <div className={style.envelop}>
      <div className={style.sidebarMenu}>
        <Link className={style.sidebarTitle} to="/games">
          Home
        </Link>
        <Link className={style.sidebarTitle} to="/about">
          About Us
        </Link>
        <Link className={style.sidebarTitle} to="/videogames">
          Create
        </Link>
      </div>
      <div className={style.sidebarNavElement}>
        <div className={style.sidebarMenu}>
          <span className={style.sidebarTitle}>New Releases</span>
          <ul className={style.sidebarList}>
            <button
              className={style.sidebarLink}
             >
              <li className={style.sidebarItem}>
                <svg className={style.sidebarIconSVG}>
                  <path
                    fill="#FFF"
                    d="M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z"></path>
                </svg>
                <span className={style.sidebarLabel}>Last 30 days</span>
              </li>
            </button>
            <button
              className={style.sidebarLink}>
              <li className={style.sidebarItem}>
                <span className={style.sidebarIcon}>
                  <svg className={style.sidebarIconSVG}>
                    <path
                      fill="#FFF"
                      d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z"></path>
                  </svg>
                </span>
                <span
                  className={style.sidebarLabel}
                  >
                  This week
                </span>
              </li>
            </button>
          </ul>
        </div>
        <div className={style.sidebarMenu}>
          <span className={style.sidebarTitle}>Top</span>
          <ul className={style.sidebarList}>
            <button
              className={style.sidebarLink}>
              <li className={style.sidebarItem}>
                <span className={style.sidebarIcon}>
                  <svg className={style.sidebarIconSVG}>
                    <path
                      d="M12.104 14.338c0-.2-.173-.324-.384-.273 0 0-.99.236-1.72.236s-1.72-.236-1.72-.236c-.21-.05-.384.072-.384.273v1.058c0 .2.179.365.397.365h3.414c.218 0 .397-.165.397-.365v-1.058zM16.033.73c0-.403-.355-.73-.794-.73H4.761c-.439 0-.794.327-.794.73v6.02c0 1.884.61 3.599 1.716 4.829A5.738 5.738 0 0010 13.499c1.67 0 3.202-.682 4.317-1.92 1.107-1.23 1.716-2.945 1.716-4.83V.73zM3.211 8.211C2.125 7.84 1.625 6.978 1.625 5.545V2.286h1.468V.827H.831c-.438 0-.794.327-.794.73v3.988c0 2.434 1.268 3.916 3.6 4.262a8.274 8.274 0 01-.426-1.596zm1.549 8.644c-.438 0-.793.327-.793.73v3.612c0 .402.355.73.794.73H15.24c.438 0 .793-.328.793-.73v-3.612c0-.403-.355-.73-.793-.73H4.76zM19.169.827h-2.262v1.46h1.468v3.258c0 1.433-.5 2.295-1.586 2.666a8.269 8.269 0 01-.426 1.596c2.332-.346 3.6-1.828 3.6-4.262V1.557c0-.403-.356-.73-.794-.73z"
                      fill="#FFF"></path>
                  </svg>
                </span>
                <span
                  className={style.sidebarLabel}
                  >
                  Best of the year
                </span>
              </li>
            </button>
          </ul>
        </div>

        <div className={style.sidebarMenu}>
          <span className={style.sidebarTitle} href="/platforms">
            Platforms
          </span>
          <ul className={style.sidebarList}>
            <button
              className={style.sidebarLink}>
             
              <li className={style.sidebarItem}>
                <span className={style.sidebarIcon}>
                  <svg className={style.sidebarIconSVG}>
                    <path
                      d="M0 13.772l6.545.902V8.426H0zM0 7.62h6.545V1.296L0 2.198zm7.265 7.15l8.704 1.2V8.425H7.265zm0-13.57v6.42h8.704V0z"
                      fill="#FFF"></path>
                  </svg>
                </span>
                <span
                  className={style.sidebarLabel}
                  >
                  PC
                </span>
              </li>
            </button>
            <button
              className={style.sidebarLink}>
              <li className={style.sidebarItem}>
                <span className={style.sidebarIcon}>
                  <svg className={style.sidebarIconSVG}>
                    <path
                      d="M11.112 16L8 14.654V0s6.764 1.147 7.695 3.987c.931 2.842-.52 4.682-1.03 4.736-1.42.15-1.96-.748-1.96-.748V3.39l-1.544-.648L11.112 16zM12 14.32V16s7.666-2.338 8.794-3.24c1.128-.9-2.641-3.142-4.666-2.704 0 0-2.152.099-4.102.901-.019.008 0 1.51 0 1.51l4.948-1.095 1.743.73L12 14.32zm-5.024-.773s-.942.476-3.041.452c-2.1-.024-3.959-.595-3.935-1.833C.024 10.928 3.476 9.571 6.952 9v1.738l-3.693.952s-.632.786.217.81A11.934 11.934 0 007 12.046l-.024 1.5z"
                      fill="#FFF"></path>
                  </svg>
                </span>
                <span
                  className={style.sidebarLabel}
                  >
                  PlayStation 4
                </span>
              </li>
            </button>
            <button
              className={style.sidebarLink}>
              <li className={style.sidebarItem}>
                <span className={style.sidebarIcon}>
                  <svg className={style.sidebarIconSVG}>
                    <path
                      fill="#FFF"
                      d="M3.564 1.357l-.022.02c.046-.048.11-.1.154-.128C4.948.435 6.396 0 8 0c1.502 0 2.908.415 4.11 1.136.086.052.324.215.446.363C11.4.222 7.993 2.962 7.993 2.962c-1.177-.908-2.26-1.526-3.067-1.746-.674-.185-1.14-.03-1.362.141zm10.305 1.208c-.035-.04-.074-.076-.109-.116-.293-.322-.653-.4-.978-.378-.295.092-1.66.584-3.342 2.172 0 0 1.894 1.841 3.053 3.723 1.159 1.883 1.852 3.362 1.426 5.415A7.969 7.969 0 0016 7.999a7.968 7.968 0 00-2.13-5.434zM10.98 8.77a55.416 55.416 0 00-2.287-2.405 52.84 52.84 0 00-.7-.686l-.848.854c-.614.62-1.411 1.43-1.853 1.902-.787.84-3.043 3.479-3.17 4.958 0 0-.502-1.174.6-3.88.72-1.769 2.893-4.425 3.801-5.29 0 0-.83-.913-1.87-1.544l-.007-.002s-.011-.009-.03-.02c-.5-.3-1.047-.53-1.573-.56a1.391 1.391 0 00-.878.431A8 8 0 0013.92 13.381c0-.002-.169-1.056-1.245-2.57-.253-.354-1.178-1.46-1.696-2.04z"></path>
                  </svg>
                </span>
                <span
                  className={style.sidebarLabel}
                  >
                  Xbox One
                </span>
              </li>
            </button>
          </ul>
        </div>
        <div className={style.sidebarMenu}>
          <span className={style.sidebarTitle} href="/genres">
            Genres
          </span>
          <ul className={style.sidebarList}>
            <button
              className={style.sidebarLink}>
              <li className={style.sidebarItem}>
                <img
                  className={style.sidebarImagen}
                  src="data:image/png;base64,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"
                  alt="[object Object]"
                  title="[object Object]"></img>
                <span
                  className={style.sidebarLabel}
              >
                  Action
                </span>
              </li>
            </button>
            <button
              className={style.sidebarLink}>
              <li className={style.sidebarItem}>
                <img
                  className={style.sidebarImagen}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAABlVBMVEVHcExNPj3///D//+////L///X///D///VKOzr///I3LS02Kio2Kyo3LCwyJyZnUU9iT09aRkV5XFV2WFT///r//er//u////Q6Ly////8qJSdHODhgTUhbSUU0KipOPj0jHiBSQUBBNDNvW1VqVU96ZF1jUUswKComIiSUeGv//+pXRUGXe3GBamNXRkZ5XlV1YFqDZ12af3SIbWKNbWGMdGpzWlNoUUuhgW6AY1mTcmT8+eWmiHedgXZnVE2qiXWsjntwV0/8+/Lr49X7+uu+qZScfW349OW8l3+0kXri1sOng2+vjHjIspyHa2fBnISig3bw6t+1oIqbeGj77c+6oIqfemn//d65lH728t+fh3exlILHpoy+q5m2l4Lm3c/k0bjGtqjOtp/MrZKlj364nYbEqJHd1Mf999PQwrHRvanUybnz58fXvJ/8+d/p3cb17NX59u3ewqesmYjLuKP48tfFrJm0o5HbybC/oozRuKTWwqvw5NH999vTs5Xy6Ne8pZCrlIHky6zm2b6/saHw27njwJ2wXzzVAAAAFHRSTlMATpu2bE7ZGxvzbPPZtpts8pvZtvYKIwMAAAkSSURBVFjDdZgHWxpbEIZPEm/UlFsX1gZEpEgRXEABAUGKRBQVa8Tee+8lMfX+7jsz5+yyoHdkYUHOu998M2fggTEe9XWvXjdKIuTS/rLRaDRAuN0Gt6Em3Oorja9f1dUzfdS/NMqyVInS6rYsc5Dh2TBqIb/UoX5rlGUN1Iygn/uSJDTVygGIrA+p8TeVUycbZU1RczOgMte7aUwRL2kw6q5PGjQHJHFaJ/SISyAEAx6Wz1dPm/mbZZ1YSZzxV3T/IU31jQii66ggaft8sdRM19QTBMXoFm5jHXgmjejTS1mWq62WpO2N6wwQpXRaqugiEGC4VzE3/+PPXoIg+QmoOb0bP99G1/N5nhp5U2u62zArTmMGQz04LRt5shyGyZ3uxTf28YVYTLP4uSYQKcbcs4Y69ooMEiwJnW6WSsVyefdUltNzc7xiT3Xp+SjsFXuNnLTmNjmSyZUTP0vw2slJVm0aFGh8NkjUawa9mBaKyFCMh1w5cJ0BYx+Os7yk4uDqKgR+IxKjt6TltNoyGI+L5cDEMoCOV/KCIGsJ8ovWuoYg7Z+gjMTFblKJwMZ+Wjas3D/WJiSLTVgdswbGs5eN6i0tG7M38/H4t/0sgPYyULqsmkqtjKzunIl242q4W8bCRDI+vQyIlTW4n8sbqjsg+6QNoDOZbkdpUZhIJb8CIn+zVUjLJ3NqsbVBlK0FzrpZ1W4UTwgESc3db62cGi/zHOJ2c1XZGmGoh6emZ+CGkgvTqWQOQCeHm/d5+fII1sc+T01NXX5Wm1GtlapnloOa9SShCEDGqcOlYkl6eMgaY5fAmdr5bHDrurBqetYo4qIKm6lULiMZDtZHFjPS8eGjWnHeT89uvacgLTVp7vvHwPWy8eDflVNej+cgWXE8D9oksx/O7vYzDzcLQ0uLu4W5/wGpqOdBS8n414x0ms8/3m8mk8l4ORE/X81k5aczxf2/qaHbhc0RTE0+OVsYSqVS44lyIpEIxHPb+VpVlWfsGU7pIhUf31gtTf27cLs5n4onAhCJgNebWMxoK91aJxhpAjA+76vieHo4EhmM333/sjANnPEERiDghdvGfr6q7JXNzJqfkIzH0xEAbax/2bpdAs54giRxknd1jjsDM1vrCZ0iPSr7YzMyOOidX1sf2yQ9sLwSASLVfpTH3Ez7LKvYdFKMBAKRrcP1hU0wOlDN8QZ281XfAsTUfkaRlL8YHhyMjH35spAaR4yrEsgqb8eqPaJSCkVa4M7Lr8UHXa6l9YUlKBhieioBKNd5RjDEWDHi1VkNBu/m1iIASqHR6I+rJ9ilRhBQLu9qXnyTkA1HR0cGelKjSDrN7BZX1iIgIxBPzce9IAIwdowuO6JGR3t6AouFNLnaLL5RwFGr6PFsYZ1AcOXBhKuLQ7rpxnFdmOD8cpozDKq2KlA6s391Oz9/D6CeUBACKd0YHfCHp0TCDMurJfrINBj4Z2G12aXdYvFqenq3OIggJTiKEoCBN7jDE44KBkddiyf8WxfS3Gr5ReSP9/aKuau9q8kQcJTRUUiIGBA28diNSQLKVZyahfbBScd3v65gUqlwcVe8vb3YckFiepCtwwbRMSBYiOq5uITJi6MXe+DoUqdInvtxD5mNLN1tucAfBQqEXndzTTYK4oAqRQldHezsHBlisaPPOwfHK2cVRXJs6tfh2NJ8MrWX6+OcUeQISH9/BWUPesfj44GJg9mdX4c337+fHR4SKF1aLtyAOdNLQ/HI4OR4casPEvP7/b29Azabw+Ho73e0YTjo3NZhh95wwVu+5bYWRrzTd2crvw7Y8vb23sLHT0MjGMBx9QUutkJK1K+C+h2OMJBMJsEKgyqtqRRFCbrGh74c7LD1sbGxjwCC4xMKcvV4VxdDwOkd4HJgcdjmaDMBiWCgiWpHsKgCBQz1TSMIKUMfx5BHikKunznF39uBEAeB2sIgyAckH5flsHX0QiCsGzpBUbo2fkyxNZSCnE9DSUwspIQWr6OQE6ww8WgDmK+9vd0Dh4+ek/NaY9ntPfO37I5yGhpJDkcmXT1QrmhwcQJAYcB4PLTeA4vbLRZLO4bPZyLXkYa8AST2+hW2hhCgRGZcfbjBFH8wN+HvsCHI5MP1CICT1lY69VGYOM2BheDa2PoIiBmOzMz09fWBbcGoX/k64UcOyYH1+iCqx0cJ88A0oSwD7BPIGR6emZnsC2GAzUpuohfLBJaABgFobbVyEKnSgaCmYWxUNoSgwclJsDkEmuwcpHEsrVYrIejBQq+BJB8Zp/KwuRjZMwl5gRxMrHcgmjuHkpkoKwA1QQAF7lRJ5LoHKuEzeQSprY2p/gAnihhbuPv6Wz8K4klZidNEOJ4eF0YwxAlVjOsJEScaJdDEBmwIj4XyaRJhbTKTMNVzrsuidocJQOQz7EDYFVE/cNq6ivNhEGTRcyDMPEWrar5Fn6XJxCYnNU6vvxfLHpyI2KhvrBUCPpibKE1dK1jUMgKLiaoDxw4WYRsqET8UhbuM681EcjrNmjhNWGulJZgSpfDjNvQP4C53ffNjS7cKDhDMeO9UkXqQVYMxRYwebKow9rMpsGHD2quJAaIFA0kiT8BYK8E94yCaYOEw6PG1t5UTbQJEUlrUcDorJRTCdOIYjVSAgBroQp+n3VbugaFBghBkBkRnJxxVKKJZCclVWdjfoGYg7ODTB4veEYhiEyHIqeVV0URwc1N1WK3v2D+YFE1SGD9YdLtrwMStJkYnlyKITrMWWmdQU7xnf4RxmhLGQ1PDr5AweBdSiMNR4kSFqQ3GE3zDGgjjqcwM24AO9EEFtTjFXSeXxbuhkmIDY3+hx3wLojOttnA77lcOIk0arKXlA0Yn6KNstfYy/84Ya/gTqw6T2EcGt0LtVRAsouUojJjwSCiBJRCS3jbgzzUv+DD3UWZWi4Pve3hPi7YGJFGioIazqAJmdQuZX/AfkP5wcL9prDvC5FQTuktrhEUecyeZ38I14etOdTe+UX/SevGnxvE5TNSoTTpHKAtbk84ljWWGxN6+qPzI1vCXOsYsbR4V1FnBtHRa7E21GO5Xy+8NVb/7Nbx5/+6tE/0z66/cyQ1q+WAjkLacg5zv3r9RMf8BZ4/8fGtyiVoAAAAASUVORK5CYII="
                  alt="[object Object]"
                  title="[object Object]"></img>
                <span
                  className={style.sidebarLabel}
                 >
                  Strategy
                </span>
              </li>
            </button>
            <button
              className={style.sidebarLink}>
              <li className={style.sidebarItem}>
                <img
                  className={style.sidebarImagen}
                  src="data:image/png;base64,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"
                  alt="[object Object]"
                  title="[object Object]"></img>
                <span
                  className={style.sidebarLabel}
                >
                  RPG
                </span>
              </li>
            </button>
            <li className={style.sidebarItem}>
              <div className={style.asidebarToggleBtn}>
                <span className={style.sidebarIcon}>
                  <svg className={style.sidebarIconSVG}>
                    <path d="M18.414 16.476l-15-15A2 2 0 10.586 4.304L14.172 17.89.586 31.476a2 2 0 102.828 2.828l15-15a2 2 0 000-2.828z"></path>
                  </svg>
                </span>
                <span className={style.sidebarLabel}>Show all</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
