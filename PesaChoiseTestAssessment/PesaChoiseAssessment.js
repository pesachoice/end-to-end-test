import { Selector, t } from 'testcafe';

let usedmisPage = 'https://dev.usemidas.io'
let email = Selector('input').withAttribute('name', 'email')
let password = Selector('input').withAttribute('type','password')
let LoginFirstPageTab = Selector('.text-light')
let LoginElement = Selector('.sc-iemXMA')
let myAccountElement = Selector('#my-account')
let singOutIconElement = Selector('#dropdown-item-button')
let SignoutDropdownElement = Selector('.dropdown-item')
fixture `Getting started with TestCafe`
   .page `${usedmisPage}`

   .beforeEach( async t =>{})
   .afterEach( async t =>{})

   //User Login   
test('User should be able to Login to dev usemidas website', async t =>{
     
    await t.click(Selector(LoginFirstPageTab).withText('Login'))
    await t.typeText(email, 'claude@tunestan.com')
    await t.click(LoginElement)
    await t.typeText(password, 'Password123!')
    await t.click(LoginElement)
    await t.click('.active-tab')
    await t.click(myAccountElement)
    await t.click(singOutIconElement)
    await t.click(Selector(SignoutDropdownElement).withText('Sign Out'))
})
    //Admin Login
test('Admin should be able to Login to dev usemidas website', async t =>{
    await t.navigateTo(`${usedmisPage}`);

    const EmployeeCategory = Selector('div > div > div > div.sc-laZMyp.kiRdWm > div > div:nth-child(2) > div > div > div > div.permission_tab.mt-3 > div > div.MuiTabs-scroller.MuiTabs-scrollable > div > a:nth-child(8) > span.MuiTab-wrapper')
    const EmployeeListPermission = Selector('div > div > div > div.sc-laZMyp.kiRdWm > div > div:nth-child(2) > div > div > div > div.permission_data > div > div > div.row > div > div:nth-child(5) > div > div > div.card-header > button > div')
    const CompannyTab = Selector ('div > div > div > div.sc-gSYCTC.fkCSEE > div.hidesideBar > ul > a:nth-child(1) > li')
    const checkbox1 = Selector('div > div > div > div.sc-laZMyp.kiRdWm > div > div:nth-child(2) > div > div > div > div.permission_data > div > div > div.row > div > div:nth-child(5) > div > div > div.collapse.show > div > div > div:nth-child(23) > div:nth-child(2) > div')
    const checkbox2 = Selector('#b3987686-d3ad-4b29-8109-4a632484de7c')

    await t.click(Selector(LoginFirstPageTab).withText('Login'))
    await t.typeText(email, 'admin@aristockphoto.com')
    await t.click(LoginElement)
    await t.typeText(password, 'Password123!')
    await t.click(LoginElement)
    await t.click(CompannyTab)
    await t.click('#company_permission')
    await t.click(EmployeeCategory)
    await t.click(EmployeeListPermission)
    await t.click(checkbox1)
    await t.click(checkbox2)
    await t.click('#dropdown-item-button')
    await t.click(Selector('.dropdown-item').withText('Sign Out'))   
})
test('Admin should be able to Login as a user and check if the user is able to see /his/her identification info', async t =>{
    await t.navigateTo(`${usedmisPage}`);

    await t.click(Selector(LoginFirstPageTab).withText('Login'))

    //Admin logging in as user Login            

    await t.typeText(email, 'claude@tunestan.com')
    await t.click(LoginElement)
    await t.typeText(password, 'Password123!')
    await t.click(LoginElement)
    await t.click('.active-tab')
    await t.click(myAccountElement)
    // await t.expect(Selector('#identification-info').visible).notOk()
    await t.setTestSpeed(0.1)
    await t.click(singOutIconElement)
    await t.click(Selector(SignoutDropdownElement).withText('Sign Out'))

})