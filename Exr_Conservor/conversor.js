const valor = parseFloat(prompt("Qual o valor da medida em metro? "))
const converter = prompt("Digite\n(1) para milímetro(mm)\n (2) para centimetro(cm)\n (3) decímetro(dm)\n (4) decâmetro(dam)\n (5) hectômetro(hm)\n (6) kilmetro(km)")

switch(parseFloat(converter)){
    case(1):{
        cnv_mm = valor*1000
        alert(cnv_mm)
        break
    }
    case(2):{
        cnv_cm = valor*100
        alert(cnv_cm)
        break
    }
    case(3):
        cnv_dm = valor*10
        alert(cnv_dm)
        break
    case(4):
        cnv_dam = valor/10
        alert(cnv_dam)
        break
    case(5):
        cnv_hm = valor/100
        alert(cnv_hm)
        break
    case(6):
        cnv_km = valor/1000
        alert(cnv_km)
        break
    default:
        alert("Default")
        break
    
}
