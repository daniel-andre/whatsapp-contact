export default class Contact{
  // number: número de telefone; padrão a ser inserido-> 5511912345673
  // message: mensagem que deseja enviar
  /* position: informa a posição que deseja deixar o botão. Possui quatro posições:
      - top-left, top-center, top-right, 
      - center-left, center-center, center-right, 
      - bottom-left, bottom-center e bottom-right
     por padrão, a posição é a 'bottom-right'
  */
  /* anchorTarget: a forma que você deseja que abra o link
     por padrão, o target é o '_blank', que abre uma nova aba
  */
  // image: imagem que deseja utilizar para o botão
  // imageText: título da imagem, para melhor indexamento e caso de erro da imagem
  constructor(number, message, position = "bottom-right", anchorTarget = "_blank", image = "../img/whatsapp.png", imageText = "WhatsApp Contact"){
    this.number = number;
    this.message = message;
    this.position = position;
    this.image = image;
    this.imageText = imageText;
    this.anchorTarget = anchorTarget;
  }
  contactConfig(){
    // template string para inserir o numero e mensagem na url
    const urlContact = `https://api.whatsapp.com/send?phone=${this.number}&text=${this.message}`;
    // criação da tag <a>
    const anchor = document.createElement("a");
    // atribuição da url a tag <a>
    anchor.href = urlContact;
    // atribuição do target a tag <a>
    anchor.target = this.anchorTarget;

    // criação da tag <img>
    const img = document.createElement("img");
    // atribuição da imagem a tag <img>
    img.src = this.image;
    // atribuição do alt a tag <img>
    img.alt = this.imageText;

    // inserção da tag <img> a tag <a>
    anchor.append(img);

    // retorno da tag <a>
    return anchor;
  }
  createDiv(){
    // criação da tag <div>
    const content = document.createElement("div");
    // atribuição de classes a tag <div>
    content.classList.add("whatsapp-contact", this.position);
    // inserção da tag <a> a tag <div>
    content.append(this.contactConfig());

    // seleção da tag <body>
    const body = document.body;
    // inserção da tag <div> a tag <body>
    body.append(content);
    // retorn da tag <div>
    return content;
  }
  init(){
    // chamada ao método createDiv(), que cria a tag <div>, com a tag <a>
    this.createDiv();
    return this;
  }
}