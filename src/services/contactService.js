export default {
    getContacts,
    getContactById,
    saveContact,
}

function getContactById(id) {
    return Promise.resolve(contactsDB.find(contact => id === contact._id))
}

function getContacts() {
    return Promise.resolve(contactsDB)
}

function saveContact(contact) {
    const picNum = Math.round(Math.random() * 90)
    const pic = 'https://randomuser.me/api/portraits/thumb/men/' + picNum + '.jpg'
    contact = {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        pic,
        _id: contact._id
    }

    if (!contact._id) {
        const _id = Math.round(Math.random() * 1000000)
        contact._id = _id
        contactsDB.push(contact)
    } else {
        const idx = contactsDB.findIndex(cont => cont._id === contact._id)
        contactsDB.splice(idx,1,contact)
    }
}

const contactsDB = [{
    _id: '123123',
    name: 'Yossi Buzaglo', 
    pic: 'https://randomuser.me/api/portraits/thumb/men/22.jpg',
    email: 'yoss@gmail.com',
    phone: '054-2345678'
},
{
    _id: '32321321',
    name: 'Valeria Rodriguez',
    pic: 'https://randomuser.me/api/portraits/thumb/women/22.jpg',
    email: 'valerodriguez@gmail.com',
    phone: '054-23487658'
},
{
    _id: '457457',
    name: 'Avner Eshta\'ol',
    pic: 'https://randomuser.me/api/portraits/thumb/men/23.jpg',
    email: 'avneresh@gmail.com',
    phone: '054-2365478'
},
{
    _id: '85786',
    name: 'Bugo Laritzki',
    pic: 'https://randomuser.me/api/portraits/thumb/men/25.jpg',
    email: 'bugolar@gmail.com',
    phone: '054-4325678'
}
]
