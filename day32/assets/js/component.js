// const F8 = {
//   create: function (componentName, options = { data: () => {}, template: '' }) {
//     class Component extends HTMLElement {
//       constructor() {
//         super();
//         this.state = options.data();
//         // this.computedHTML = options.template;
//         // this.templateNode = document.createElement('template');
//         // this.templateNode.innerHTML = this.computedHTML;
//         this.nodeTexts = [];
//         /** @type {string} */
//         this.computedHTML = options.template;
//         /** @type {HTMLTemplateElement} */
//         this.templateNode = document.createElement('template');
//       }

//       handleReRender(code) {
//         // Lặp qua this.state, lấy các key đã thay đổi dựa theo "code"
//         Object.keys(this.state).forEach((key) => {
//           // cộng chuỗi để thành key của nodeTexts
//           const elementState = code.split('.');
//           console.log(elementState);
//           console.log(key);
//           // console.log(elementState);
//           // console.log(elementState);
//           // Nếu có một key giống với elementState => key của nodeTexts cần thay đổi
//           if (elementState.includes(key)) {
//             // Xử lý chuỗi để cắt ra key của nodeTexts cần thiết

//             // Index elementState kết thúc của key
//             const positionKey =  elementState.indexOf(key) + key.length;
//             console.log(positionKey);
//             // Từ đầu elementState cho tới index kết thúc của key
//             const dataNodeElements = elementState.substring(0, positionKey);

//             // Cập nhật tất cả nodeText liên quan
//             this.nodeTexts[dataNodeElements].forEach((element) => {
//               element.textContent = this.state[key];
//             });
//           }
//         });
//       }
      
//       handleChange(element, event, code) {
//         element.addEventListener(event, () => {
//           const newCode = `this.state.${code}`;
//           eval(newCode);
//           this.handleReRender();
//         });
//       }
    
//     addElementEvent() {
//         // Lấy tất cả phần tử con
//         Array.from(this.templateNode.children).forEach((child) => {
//           // Tìm xem phần tử con nào có thuộc tính bắt đầu bằng "v-on"
//           const childEventAttr = [...child.attributes].find((attribute) =>
//             attribute.name.startsWith('v-on')
//           );
//           // Sử dụng regex cắt ra các phần cần thiết
//           //  - [0]: Toàn bộ  định dạng,
//           //  - [1]: event,
//           //  - [2]: value(code)
//           const regex = /v-on:(\w+)="(\w+.*?)"/;
//           // Định dạng bên HTML:=> nodeName="nodeValue"
//           const nodeAttr = `${childEventAttr}`;
//           // console.log(childEventAttr.nodeName);
//           // Lấy ra mảng match
//           const match = nodeAttr.match(regex);
//           if (match) {
//             // Gọi hàm this.handleChange để thêm các sự kiện change
//             this.handleChange(child, match[1], match[2]);
//           }
//         });
//       }

//       /**
//        * Khởi tạo giá trị ban đầu.
//        * @param {string} value - Giá trị
//        */
//       initialGetValue(value) {
//         // regex để lấy ra state key
//         const regex = new RegExp(`{{ ${value} }}`, 'gi');
//         // lấy ra các state key từ computedHTML match với regex
//         const match = this.computedHTML.match(regex); /*...Code...*/
//         console.log(match);
//         // Lặp qua các mẫu tìm thấy
//         match?.forEach((cutRegex) => {
//           Array.from(this.templateNode.children).forEach((child) => {
//             if (child.innerHTML.includes(cutRegex)) {
//               // Tách các phần từ child đã match với regex:=> Phần state key
//               const parts = child.innerHTML.split(cutRegex); /*...Code...*/
//               console.log(parts);
//               const fragment = document.createDocumentFragment();
//               // Lặp qua các phần tử đã tách
//               parts.forEach((text, index) => {
//                 fragment.appendChild(document.createTextNode(text));
//                 if (index < parts.length - 1) {
//                   // Tạo nút biến và thêm vào fragment
//                   const variableNode = document.createTextNode(
//                     this.state[value]
//                   );
//                   // Cập nhật trạng thái, ghi các nodeText vào this.nodeTexts để xử lý re-render
//                   if (!this.nodeTexts['element-' + value]) {
//                     this.nodeTexts['element-' + value] = [variableNode];
//                   } else {
//                     this.nodeTexts['element-' + value].push(variableNode);
//                   }
//                   fragment.appendChild(variableNode);
//                 }
//               });
//               // Xóa nội dung ban đầu của child và thêm fragment vào
//               child.innerHTML = '';
//               child.appendChild(fragment);
//             }
//           });
//         });
//       }

//       /**
//        * Được gọi khi component được kết nối vào DOM.
//        */
//       connectedCallback() {
//         // Xử lý innerHTML từ computedHTML vào thẻ template
//         this.templateNode.innerHTML =  this.computedHTML; /*...Code...*/

//         // Clone templateNode, đưa lại vào templateNode để sử dụng
//         this.templateNode = this.templateNode.content.cloneNode(true); /*...Code...*/
//         console.log(this.templateNode);
//         // Xử lý lại templateNode để thay thế định dạng {{variable}}
//         Object.keys(this.state).forEach((key) => this.initialGetValue(key));
//         // Gọi hàm render để hiển thị

//         this.render();
//       }

//       /**
//        * Render component.
//        */
//       render() {
//         // Xử lý các element của templateNode, thêm sự kiện
//         this.addElementEvent();
//         // append vào customElement
//         this.appendChild(this.templateNode);
//       }
//     }
//     customElements.define(componentName, Component);
//   }
// };

// console.log(F8.handleReRender);

/**
 * @typedef {Object} ComponentOptions
 * @property {() => Object} data - Hàm trả về dữ liệu mặc định của component
 * @property {string} template - Chuỗi HTML template
 */

/**
 * Module F8 chứa phương thức create để tạo ra một custom element.
 * @namespace F8
 */
const F8 = {
  /**
   * Phương thức create tạo ra một custom element.
   * @param {string} componentName - Tên của component
   * @param {ComponentOptions} [options] - Các tuỳ chọn cho component
   * @param {function} [options.data] - Hàm trả về dữ liệu mặc định của component
   * @param {string} [options.template] - Chuỗi HTML template
   */
  create: function (componentName, options = { data: () => {}, template: '' }) {
    /**
     * @class Component
     * @extends HTMLElement
     */
    class Component extends HTMLElement {
      /**
       * Khởi tạo component.
       */
      constructor() {
        super();
        /** @type {Object} */
        this.state = options.data();
        /** @type {NodeList[]} */
        this.nodeTexts = [];
        /** @type {string} */
        this.computedHTML = options.template;
        /** @type {HTMLTemplateElement} */
        this.templateNode = document.createElement('template');
        console.log(this.nodeTexts.key);
      }

      /**
       * Xử lý việc render lại component.
       * @param {string} code - Mã code
       */
      handleReRender(code) {
        // Lặp qua this.state, lấy các key đã thay đổi dựa theo "code"
        Object.keys(this.state).forEach((key) => {
          // cộng chuỗi để thành key của nodeTexts
          // console.log(this.nodeTexts.keys);
          const elementState = this.nodeTexts['element-' + key] ? this.nodeTexts['element-' + key].join('') : '';
          console.log(elementState);
          // Nếu có một key giống với elementState => key của nodeTexts cần thay đổi
          if (elementState.includes(key)) {
            // Xử lý chuỗi để cắt ra key của nodeTexts cần thiết

            // Index elementState kết thúc của key
            const positionKey = elementState.indexOf(key) + key.length; /*...Code...*/
            console.log(positionKey);
            // Từ đầu elementState cho tới index kết thúc của key
            const dataNodeElements = elementState.substring(0,positionKey);
            console.log(dataNodeElements);
            console.log(this.nodeTexts[dataNodeElements]);
            // Cập nhật tất cả nodeText liên quan
            this.nodeTexts[dataNodeElements].forEach((element) => {
              element.textContent = this.state[key]; /*...Code...*/
            });
          }
        });
      }
      /**
       * Xử lý sự kiện thay đổi.
       * @param {HTMLElement} element - Phần tử HTML
       * @param {string} event - Tên sự kiện
       * @param {string} code - Mã code
       */
      handleChange(element, event, code) {
        // Element, gán sự kiện
        element.addEventListener(event, () => {
          // Nối chuỗi với this.state để cập nhật lại state
          const newCode = `this.state.${code}`; /*...Code...*/
          console.log(newCode);
          // sử dụng hàm eval để chạy đoạn code bằng String
          eval(newCode);

          // Xử lý việc render lại component bằng đoạn code viết trong giá trị attr
          this.handleReRender(code);
        });
      }

      /**
       * Thêm sự kiện cho các phần tử con.
       */
      addElementEvent() {
        // Lấy tất cả phần tử con
        Array.from(this.templateNode.children).forEach((child) => {
          // Tìm xem phần tử con nào có thuộc tính bắt đầu bằng "v-on"
          const childEventAttr = [...child.attributes].find((attribute) =>
            attribute.name.startsWith('v-on')
          );
          // Sử dụng regex cắt ra các phần cần thiết
          //  - [0]: Toàn bộ định dạng,
          //  - [1]: event,
          //  - [2]: value(code)
          if (childEventAttr) {
      // Sử dụng regex để cắt ra các phần cần thiết từ thuộc tính
            const regex = /v-on:(\w+)="(\w+.*?)"/;
            const nodeAttr = `${childEventAttr.nodeName}="${childEventAttr.nodeValue}"`;

            // Lấy ra mảng match
          const match = nodeAttr.match(regex);
          if (match) {
            // Gọi hàm this.handleChange để thêm các sự kiện change
           this.handleChange(child, match[1], match[2]);
          }
    }
        });
      }

      /**
       * Khởi tạo giá trị ban đầu.
       * @param {string} value - Giá trị
       */
      initialGetValue(value) {
        // regex để lấy ra state key
        const regex = new RegExp(`{{ ${value} }}`, 'gi');
        // lấy ra các state key từ computedHTML match với regex
        const match = this.computedHTML.match(regex);

        // Lặp qua các mẫu tìm thấy
        match?.forEach((cutRegex) => {
          Array.from(this.templateNode.children).forEach((child) => {
            if (child.innerHTML.includes(cutRegex)) {
              // Tách các phần từ child đã match với regex:=> Phần state key
              const parts = child.innerHTML.split(cutRegex);
              console.log(parts);

              const fragment = document.createDocumentFragment();
              // Lặp qua các phần tử đã tách
              parts.forEach((text, index) => {
                fragment.appendChild(document.createTextNode(text));
                if (index < parts.length - 1) {
                  // Tạo nút biến và thêm vào fragment
                  const variableNode = document.createTextNode(
                    this.state[value]
                  );
                  // Cập nhật trạng thái, ghi các nodeText vào this.nodeTexts để xử lý re-render
                  if (!this.nodeTexts['element-' + value]) {
                    this.nodeTexts['element-' + value] = [variableNode];
                  } else {
                    this.nodeTexts['element-' + value].push(variableNode);
                  }
                  fragment.appendChild(variableNode);
                }
              });
              // Xóa nội dung ban đầu của child và thêm fragment vào
              child.innerHTML = '';
              child.appendChild(fragment);
            }
          });
        });
      }

      /**
       * Được gọi khi component được kết nối vào DOM.
       */
      connectedCallback() {
        // Xử lý innerHTML từ computedHTML vào thẻ template
        this.templateNode.innerHTML = this.computedHTML; /*...Code...*/

        // Clone templateNode, đưa lại vào templateNode để sử dụng
        this.templateNode = this.templateNode.content.cloneNode(true); /*...Code...*/

        // Xử lý lại templateNode để thay thế định dạng {{variable}}
        Object.keys(this.state).forEach((key) => this.initialGetValue(key));
        // Gọi hàm render để hiển thị

        this.render();
      }

      /**
       * Render component.
       */
      render() {
        // Xử lý các element của templateNode, thêm sự kiện
        this.addElementEvent();
        // append vào customElement
        this.appendChild(this.templateNode);
      }
    }
    // Khai báo, đăng ký tên và hàm tạo
    customElements.define(componentName, Component);
  },
};

