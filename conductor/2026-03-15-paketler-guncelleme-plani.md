# Plan: Paketler Sayfasını Yeni İçerikle Güncelleme

Bu plan, `paketler` sayfasındaki paket bilgilerini, fiyatlarını, özelliklerini ve sayfanın altındaki CTA (Eylem Çağrısı) bölümünü kullanıcının ilettiği yeni verilere göre güncellemeyi hedefler.

## Değişiklikler

### 1. `src/lib/constants.ts` Güncellemesi
- `PACKAGES` dizisini yeni 3 paket yapısına (`Dijital Vitrin`, `Hazır İşletme`, `Dijital İşletme`) göre güncelle.
- Paket objelerine `priceLabel` ("+ KDV"), `term` ("Tek Seferlik") ve `notes` (dizi) alanlarını ekle.
- Mevcut "Ekstralar" (Add-ons) bölümü yeni yapıda belirtilmediği için kaldırılacak veya devre dışı bırakılacak (kullanıcı tüm içeriği şu şekilde güncelle dediği için yeni yapıya sadık kalınacak).

### 2. `src/components/sections/PricingTable.tsx` Güncellemesi
- Kart yapısını yeni alanları (`priceLabel`, `term`, `notes`) gösterecek şekilde revize et.
- Masaüstü görünümde 3 paket için `lg:grid-cols-3` düzenine geç.
- "Notlar" bölümünü her kartın altına veya özellikler listesinin altına ekle.
- "Dijital Varlık Ekstraları" bölümünü kaldır (yeni içerikte yer almıyor).

### 3. `src/app/paketler/page.tsx` Güncellemesi
- Sayfanın altındaki "Özel Bir Talebiniz mi Var?" bölümünü, kullanıcının ilettiği "İhtiyacınız Bunlardan Fazlası mı?" metni ve yapısına göre güncelle.

## Doğrulama ve Test
- Paket fiyatlarının ve özelliklerinin doğru göründüğünü kontrol et.
- Notlar bölümünün (özellikle Paket 3'teki uyarı notunun) doğru stil ile görüntülendiğini doğrula.
- Mobil ve masaüstü görünümlerin (3 kart yan yana) düzgün olduğunu kontrol et.
- WhatsApp butonunun doğru linke (`NEXT_PUBLIC_WHATSAPP_NUMBER`) sahip olduğunu doğrula.
