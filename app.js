let menus = [
    {
        id: 0,
        title: 'Menu',
        parentLinks: [
            {
                id: 1,
                title: 'Dashboard',
                icon: 'home',
                link: 'dashboard',
                iconActive: 'home-fill',
                parentLinks: [
                    {
                        id: 2,
                        title: 'View'
                    },
                    {
                        id: 3,
                        title: 'Create'
                    },
                    {
                        id: 4,
                        title: 'Manage'
                    }
                ]
            },
            {
                id: 5,
                title: 'Clients',
                icon: 'client',
                link: 'client',
                iconActive: 'client-fill',
                parentLinks: [
                    {
                        id: 6,
                        title: 'View'
                    },
                    {
                        id: 7,
                        title: 'Create'
                    },
                    {
                        id: 8,
                        title: 'Manage'
                    }
                ]

            },
            {
                id: 9,
                title: 'Services',
                icon: 'bookmark',
                link: 'service',
                parentLinks: [
                    {
                        id: 10,
                        title: 'View'
                    },
                    {
                        id: 11,
                        title: 'Create'
                    },
                    {
                        id: 12,
                        title: 'Manage'
                    }
                ]
            },
            {
                id: 13,
                title: 'Users',
                icon: 'users',
                link: 'admin-manage',
                parentLinks: [
                    {
                        id: 14,
                        title: 'View'
                    },
                    {
                        id: 15,
                        title: 'Create'
                    },
                    {
                        id: 16,
                        title: 'Manage'
                    }
                ]
            },
            {
                id: 17,
                title: 'Reconcilations',
                icon: 'cloud',
                link: 'reconcilation'
            }
        ]
    },
    {
        id: 18,
        title: 'Settings',
        parentLinks: [
            {
                id: 19,
                title: 'System',
                icon: 'setting',
                link: 'setting',
                iconActive: 'setting-fill',
                parentLinks: [
                    {
                        id: 20,
                        title: 'View',
                    },
                    {
                        id: 21,
                        title: 'Create'
                    },
                    {
                        id: 22,
                        title: 'Manage'
                    }
                ]
            },
            {
                id: 23,
                title: 'User Roles',
                icon: 'certificate',
                link: 'user-group',
                iconActive: 'certificate-fill',
                parentLinks: [
                    {
                        id: 24,
                        title: 'View'
                    },
                    {
                        id: 25,
                        title: 'Create'
                    },
                    {
                        id: 26,
                        title: 'Manage'
                    }
                ]
            },
            {
                id: 1,
                title: 'User Profiles',
                icon: 'user-border',
                link: 'user-profile',
                parentLinks: [
                    {
                        id: 27,
                        title: 'View'
                    },
                    {
                        id: 28,
                        title: 'Create'
                    },
                    {
                        id: 29,
                        title: 'Manage'
                    }
                ]
            }
        ]
    }
]

setInterval(()=>console.log(JSON.stringify(menus)),3000)

let root = document.getElementById('root');

let margin = 10;

function createCheckBox(menus, wrapper) {
    if (menus) {
        for (let i = 0; i < menus.length; i++) {

            let elementWrapper = document.createElement('div');

            let label = document.createElement('label');
            label.innerText = menus[i].title;

            let checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.setAttribute('data-menu', menus[i].id);
            menus[i].active = false;
            checkbox.setAttribute('data-checked', menus[i].active);
            checkbox.addEventListener('change', function () {
  
                if(menus[i].parentLinks){
                    check(menus[i],menus[i].parentLinks);
                }
                
            });

            elementWrapper.appendChild(checkbox);
            elementWrapper.appendChild(label);

            wrapper.appendChild(elementWrapper);

            if (menus[i]) {
                if (menus[i].parentLinks) {
                    let innerWrapper = document.createElement('div');
                    innerWrapper.style.marginLeft = margin * 2 + "px";
                    createCheckBox(menus[i].parentLinks, innerWrapper);
                    wrapper.appendChild(innerWrapper);
                }
            }
        }
    }
}

function check(menu,menusChild){
    // let counter = 0;
    for (let i = 0; i < menusChild.length; i++) {
        menusChild[i].active = !menusChild[i].active;
        // if(menusChild[i].active){
        //     counter++;
        // }else{
        //     counter--;
        // }
        if(menusChild[i]){
            if(menusChild[i].parentLinks){
                check(menusChild[i],menusChild[i].parentLinks);
            }
        }
    }
    // if(counter == menusChild.length){
    //     menu.active = true
    // }
}

let mainWrapper = document.createElement('div');
mainWrapper.id = "#main-wrapper";
let label = document.createElement('label');
label.innerText = "Select All";

let checkbox = document.createElement('input');
checkbox.type = 'checkbox';

mainWrapper.appendChild(checkbox);
mainWrapper.appendChild(label);

let wrapper = document.createElement('div');

createCheckBox(menus, wrapper);

mainWrapper.appendChild(wrapper);
root.appendChild(mainWrapper);


document.getElementsByTagName