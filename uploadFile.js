import {Selector, t} from 'testcafe'

const uploadFile = Selector('#file-upload')
const uploadBtn = Selector('#file-submit')
const uploadField = Selector('#uploaded-files')

fixture`Upload file`
    .page`https://the-internet.herokuapp.com/upload`;

test('File upload', async t =>{
    await t
        .setFilesToUpload(uploadFile, './text.txt')
        .click(uploadBtn)
        .wait(5000)
        .expect(uploadField.innerText).contains('text.txt')
})
