export type Job = {
    title: string,
    place: string,
    payload: string,
    description: string
}

const frontendDeveloper: Job = {
    title: 'Frontend Developer',
    place: 'Sysware',
    payload: '(Jun 2022 - present)',
    description: 'Builded and maintained a business management web application, iterated upon designs, improved the performance of the page by 30%, improved the usability of the webpage with fresh, user-centered designs' + '\n' + '\n' + 'Managed a small team of two developers (including me) and improved upon systems in the codebase.'
}


export const jobList = [frontendDeveloper]

