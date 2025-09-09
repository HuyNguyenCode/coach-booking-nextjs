export const adminMenu = [
    {
        tabsName: 'Users system',
        menus: [
            {
                nav: 'Manage Users',
                link: '/system/user-redux',
            },
            {
                nav: 'Manage Coaches',
                link: '/system/coach-manage',
            },
            {
                nav: 'Manage Students',
                link: '/',
            },
        ],
    },

    {
        tabsName: 'Classroom',
        menus: [
            {
                nav: 'Manage classroom',
                link: '/',
            },
        ],
    },
    {
        tabsName: 'Specialities',
        menus: [
            {
                nav: 'Manage Specialities',
                link: '/system/specialities-manage',
            },
        ],
    },
    {
        tabsName: 'Handbook',
        menus: [
            {
                nav: 'Manage Handbook',
                link: '/',
            },
        ],
    },
];

export const coachMenu = [
    {
        tabsName: 'Manage',
        menus: [
            {
                nav: 'Manage Schedule',
                link: '/coach/manage-schedule',
            },
            {
                nav: 'Manage Students',
                link: '/coach/manage-student',
            },
        ],
    },

    {
        tabsName: 'Classroom',
        menus: [
            {
                nav: 'Manage classroom',
                link: '/',
            },
        ],
    },
];
