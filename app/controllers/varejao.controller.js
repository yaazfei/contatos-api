const db2 = require("../models/postgres");

const Contact = db2.contact;

exports.addContact = (req, res) => {
  // res.send({ message: `Contato adicionado!`});
  console.log(`addContact ${req.body.nome} ${req.body.celular} `);
  console.log(`db ${db2} ${Contact}`);
  Contact.create({
    celular: req.body.celular,
    nome: req.body.nome
  })
    .then(contact => {
      console.log(`Contato adicionado ${contact.nome} ${contact.celular} `);
      res.send({ message: `Contato adicionado! Nome: ${contact.nome} Celular: ${contact.celular}` });
    })
    .catch(err => {
      console.error("Erro ao criar contato " + err.message);
      res.status(500).send({ message: err.message });
    });
};

exports.addAllContacts = (req, res) => {
  console.log(`addAllContacts`);
  Contact.destroy({
    where: {},
    truncate: false
  })
  .then(total => {
      let contacts = req.body.contacts;

      contacts.forEach((contato) => {
        Contact.create({
          celular: contato.cellphone,
          nome: contato.name
        });
      
    });
    res.send({ message: `Contatos adicionados!`});
  })
  .catch(err => {
    console.error("Erro ao criar contatos " + err.message);
    res.status(500).send({ message: err.message });
  });
}
