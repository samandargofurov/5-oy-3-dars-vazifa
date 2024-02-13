/**
 * Musiqalar ro'yxatini saqlash uchun ishlatiladigan obyektga shablon yasash uchun
 * class yarating. Ushbu class da musiqaning bir qancha ma'lumotlari mavjud bolsin
 * Har bir musiqada quyidagi xususiyatlar bo'lishi kerak
 * 
 * 1. nomi
 * 2. avtor
 * 3. turi
 * 4. ishlab chiqarilgan yili
 * 5. kimlar tomonidan qayta kuylangan (massiv holatida)
 * 6. vaqti (secund larda)
 * 7. id
 * 
 * Ushbu class yordamida sikl dan foydalanib massiv yaratadigan funksiya yozing.
 * Ushbu funksiyaning argumentiga qanday son kiritilsa shuncha musiqa kiritishi
 * va barcha musiqalardan iborat yangi massiv hosil qilishi kerak (bunda massivning
 * har bir element obyektini yasash uchun yuqoridagi class dan foydalaniladi).
 * 
 * yana shunday funksiya yaratingki yuqoridagi funksiya yordamida yasalgan musiqalar
 * ro'yxatidan nomi takrorlanganlarini o'chirib tashlasin.
 * 
 * Ushbu topshiriqni bajarishda quyidagi mavzulardan foydalanish shart
 * 1. Set
 * 2. Destructuring
 * 3. class
 */


class Playlist{
    constructor(name, avtor, type, madeYear, resung, time, id) {
        this.name = name;
        this.avtor = avtor;
        this.type = type;
        this.madeYear = madeYear;
        this.resung = resung;
        this.time = time;
        this.id = id
    }
}

let user = new Set();

user.set("ona", "Jaloldin Ahmadaliyev", "shunchaki qoshiq", 2022, "Jaloldin Ahmadaliyev", 17000, Math.trunc(Date.now()));
user.set("qaldirgoch", "Alisher Fayz", "shunchaki qoshiq", 2023, "Alisher Fayz", 12000, Math.trunc(Date.now()));
user.set("ona", "Sardor Mamadaliyev", "shunchaki qoshiq", 2020, "Sardor Mamadaliyev", 47000, Math.trunc(Date.now()));

user.delete('name');
console.log(user.name);