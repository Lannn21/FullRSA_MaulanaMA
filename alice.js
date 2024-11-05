const crypto = require("crypto");

const AlicePublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAu4eumSL9t4zGAV7NpzKe
qNblCuZ6LjMgF+ng3f4Sf+LJpWEW/GHjr2ip6YR7PfUG0A/Fl4/3bfhkURDpZ+ek
VkezjGWZpiy0BPNBA1BoP9L4mrCqhKyIPidX00aSBEiN9BB0hFlQAqKuWQtqX+5S
Egf5njDr1sAIxGzsxEqbsn2FwCR3zm+sgUqIWGxXpvzOXuQBNOy/zJYBm52OLevQ
Y920lQfi/Fp2qv0XDD6Gs8qUcsHlgxOLop8deo24Fu/DcZV61LEmNrNSxyipETMq
Bhu4TTTki3aaTtHeDRYZiGO/EX5zeonEwdofTC9dgMFc88eSniveJmZYLiWwplfX
/QIDAQAB
-----END PUBLIC KEY-----`;
const AlicePublicKey = crypto.createPublicKey(AlicePublicKeyPem);

const AlicePrivateKeyPem = `-----BEGIN PRIVATE KEY-----
MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC7h66ZIv23jMYB
Xs2nMp6o1uUK5nouMyAX6eDd/hJ/4smlYRb8YeOvaKnphHs99QbQD8WXj/dt+GRR
EOln56RWR7OMZZmmLLQE80EDUGg/0viasKqErIg+J1fTRpIESI30EHSEWVACoq5Z
C2pf7lISB/meMOvWwAjEbOzESpuyfYXAJHfOb6yBSohYbFem/M5e5AE07L/MlgGb
nY4t69Bj3bSVB+L8Wnaq/RcMPoazypRyweWDE4uinx16jbgW78NxlXrUsSY2s1LH
KKkRMyoGG7hNNOSLdppO0d4NFhmIY78RfnN6icTB2h9ML12AwVzzx5KeK94mZlgu
JbCmV9f9AgMBAAECggEAOw6kxqdFXaugo8fWXiRL4QIkCYXBzpDdN4q4/VBJRSsH
s+Ral8rAKHp+oALPyRhEN/vvjyaQlnpWJU19I/LIRz+3ZKyOcc28N57fx4pn+kmX
byfZ24R2N5SuTOP5kg3DXqxb9V4nG11eKL62llV4VSNb0hy3+N5rJGjlO3//fnsN
L3IXvnfkjcke4Pv8fnWsuGlKG2pJSbUIEZx4R1lNVkN+sxu/2A2IjbT2r6zau9Qg
vFgwk+ixkC4apIq2YDkAyw9s1gJJ/caMQdubrfr6Dr27kGB8LKyTM8UGEtJ/6bUC
uk0o8tC+XyQ8h5Q/GqCFsrl7ZH8nO9IbQSwkw2LQRQKBgQDjDISddt/S4KMBzBP7
Hkuf9cTYe4ukFCLsxu9JBQ809XXZR5cQE3xQ+lwUm7aa6RCfaQ5kMrdXFS+wG0Lr
1ww4yez7EkxxJaKnFoXyMaHPbdUSuyPNdiOs0bmcn81XQy/6OEHTx+wBlnwKY2Al
fMg67SmY9Vs3Aenak3nAL1a57wKBgQDTcSl1C+Q1GLBl/Llwdg9GBrXrbb/DvbrD
4FI2FDb8AwqUzgY6H5A7Z+ZN28qcVnSwGste7fupUo8bxc3rHFwkgngdDsYZ5ULO
V0TDFWqhCfiMnOtdGafrXQQWz0dcTANHCLHcSkSKTMNcqsgEJRIlq2K4puK9p9Mq
scMsGGTo0wKBgERXzUdUs/TW91ogIteQ+/SPVwxOy+68vPKGwxo4sqYfSLT5jqgh
JWd+pN7zLBkfFIjXZ6STe4pz7yHUYuV4ms4xQeslS+s3B+nBptoLRIiap+t2d0Vu
TTjE/Fj/5SBiMfvgmTf1Ur37nSTHWvaNw/uwzbekCyvYoJrRj3FhDnrzAoGABB+K
zWuD8b0fg32gKB9FQPpUhdjICosinzs6ny9ZuyRcCnbSDEQdTetCxHXqx42wDNcY
7Cr741tmywXadCFDcrrQmNB28H5WBSwSfTNntug43pUYyeH8MkzIDaHRJG2fCr2S
qlcQaxoAHUh/SgVnCzECZdNrTIN/TK/WvH9lSF0CgYAIvVQEvty2aUamoPES7KSx
JNeeotnQGAI8iUPTQS7cwd0wpxvyTmfEQhPFDYscwPsnew4es8L/0l2H9TMwSMjU
312HrXZ258mr54YY3OG9P5az8lnCetez5Mn5IRGO/G9mo8QLx6Dt1eMwdqdjb/6Q
389Bsxvx80joODs/aObbRA==
-----END PRIVATE KEY-----`;
const AlicePrivateKey = crypto.createPrivateKey(AlicePrivateKeyPem);

const BobPublicKeyPem = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAjp7yCF5ooYWwLZSWVfWh
X9F3VAedPH9skf7lMIPlOuEr5eEXDqjsfINbXcLkSA6QH7yxUWbjQGeLzvHUovTe
rwexQurnji1SqF+atyQxPzsw1lc0RvMUT2VVKpq2mZzhjnRax4WReSR2Xf6oXO21
YziWR2rxzv3TnRbUTLYA0zBoTH6Zns+lO3+D2SJ5YchjJilnCS3Ubc3TGR99Z5xk
jx8r62jXie+LBjiidVXTGVccgMP3O4+J8x2CMN/YKu8LdT9yeMfBbhdrt7r7q66T
BG6DrLMYVDVSA+6jhoWXFrxFSw+aALBJsgHFp1E3QcwESn0dhB8WPX0dETApFYfu
rQIDAQAB
-----END PUBLIC KEY-----`;
const BobPublicKey = crypto.createPublicKey(BobPublicKeyPem);

const message = "I want some apples";
console.log("Message:", message);

const data = Buffer.from(message);
const signature = crypto.sign("sha256", data, AlicePrivateKey);
console.log("Signature:", signature.toString("hex"));

const ciphertext = crypto.publicEncrypt(BobPublicKey, data);
console.log("Ciphertext:", ciphertext.toString("hex"));