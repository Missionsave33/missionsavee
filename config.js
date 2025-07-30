// ✅ URL สำหรับเชื่อมกับ Google Apps Script
const API_URL = 'https://script.google.com/macros/s/AKfycbydKumtEImW3tOj8H67kePm2vEnpIV2jxcSwtQEiz3Hm-5GvhOL741zvZ7GId1pTk-H/exec';

// ✅ รายชื่อธนาคารในไทย
const BANKS = [
  'ธนาคารกรุงเทพ',
  'ธนาคารกสิกรไทย',
  'ธนาคารกรุงไทย',
  'ธนาคารไทยพาณิชย์',
  'ธนาคารกรุงศรีอยุธยา',
  'ธนาคารทหารไทยธนชาต (TTB)',
  'ธนาคารซีไอเอ็มบีไทย',
  'ธนาคารยูโอบี',
  'ธนาคารแลนด์ แอนด์ เฮ้าส์',
  'ธนาคารออมสิน',
  'ธนาคารอิสลามแห่งประเทศไทย',
  'ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร (ธ.ก.ส.)',
  'ธนาคารทิสโก้',
  'ธนาคารเกียรตินาคินภัทร',
  'ธนาคารไทยเครดิตเพื่อรายย่อย'
];

// ✅ ชื่อชีตใน Google Sheet
const SHEET_NAMES = {
  member: 'Member',
  bank: 'Bank',
  yourself: 'Yourself',
  all: 'All data'
};