#!/bin/bash
# Download all Hoopinkai site assets from Wix CDN

BASE_URL="https://static.wixstatic.com/media"
ASSETS_DIR="src/assets/images"

# Array of download pairs: "wix-id|destination-path"
declare -a DOWNLOADS=(
  # Home / Support Circles
  "2572af_c0a5f7ffe8d1406e9739a7f9ec3d31f6~mv2.jpg|$ASSETS_DIR/home/hero.jpg"
  "e37e7b_6efca749534b434ebcb5a11914a5e102~mv2.jpg|$ASSETS_DIR/home/support-group.jpg"
  "2572af_59cbb60e170b46d699e701a6b7b53ab0~mv2.jpg|$ASSETS_DIR/home/facilitator-portrait.jpg"
  "2572af_a709dd63a098417aa0f599f341b320be~mv2.png|$ASSETS_DIR/home/background-graphic.png"
  "2572af_c11472e5629f4df28e4f201c572eb0c2~mv2.jpeg|$ASSETS_DIR/home/creative-careers-circle.jpeg"
  "2572af_2a10406a2cf84c7ea6cb5bd3a6cac42c~mv2.jpg|$ASSETS_DIR/home/transitions-circle.jpg"
  "b17cf0_6b659499729c4a5cbf94e1f395cac342~mv2.jpg|$ASSETS_DIR/home/themes-section.jpg"
  "a3c153_fc1ed232d7f945a49d015ea1f59ccad6~mv2.jpg|$ASSETS_DIR/home/farm-landscape.jpg"
  "2572af_5c8cc86cf4d94f3f867cb85575abc847~mv2.jpg|$ASSETS_DIR/home/farm-detail.jpg"
  "b17cf0_8d900c33e2c0492eb769b00ac2032c4e~mv2.jpg|$ASSETS_DIR/home/eligibility-section.jpg"
  "a3c153_c9a12e6c2d364e2db74482d13ca346c0~mv2.jpg|$ASSETS_DIR/home/collection-preview.jpg"
  "2572af_d5921de02ef647ecacd239fb85450441~mv2.jpg|$ASSETS_DIR/home/farm-image.jpg"
  "2572af_3cf7ea7da1a945d1a9d26155d25d15c3~mv2.png|$ASSETS_DIR/home/facilitator-photo.png"
  "2572af_b71cb71c20ce44d0a3c107024bcb8830~mv2.jpg|$ASSETS_DIR/home/agreements-section.jpg"
  "2572af_b182d0c51a0046b9a4fadf721a0d9670~mv2.png|$ASSETS_DIR/home/testimonial-portrait.png"

  # About Us
  "b17cf0_c84041648a264916bd7e72ea9fe7e590~mv2.jpg|$ASSETS_DIR/about/hero-aerial.jpg"
  "b17cf0_825978a5d6ee4b1da8ba5ff0ce512d5a~mv2.jpg|$ASSETS_DIR/about/founder-portrait.jpg"

  # School Tours
  "044c56_5eddbda0866940989a6688fee7449a0f~mv2.jpg|$ASSETS_DIR/school-tours/hero.jpg"
  "044c56_b9b43b12eb314de4842117019a687ac6~mv2.jpg|$ASSETS_DIR/school-tours/activity-1.jpg"
  "044c56_5120a21649164adf90872be7b2d35b39~mv2.jpg|$ASSETS_DIR/school-tours/activity-2.jpg"
  "044c56_3a7e9501c4944104bb83f4da05197c02~mv2.jpg|$ASSETS_DIR/school-tours/activity-3.jpg"
  "044c56_18b5284560b64bcf88930ed457c4e9c5~mv2.jpg|$ASSETS_DIR/school-tours/activity-4.jpg"
  "044c56_afbc3de204aa4212bca03b409aa49104~mv2.jpg|$ASSETS_DIR/school-tours/activity-5.jpg"
  "044c56_e726c514406843699562bfe301f226ab~mv2.png|$ASSETS_DIR/school-tours/pricing-icon.png"
  "044c56_d33495e7ea1441b898e7228f90d6cf00~mv2.jpg|$ASSETS_DIR/school-tours/activity-6.jpg"

  # Flow Fest
  "b17cf0_1761e34342ba47f7a9907a2c4e32e441~mv2.jpg|$ASSETS_DIR/flow-fest/hero.jpg"
  "b17cf0_7924e594ce78495e881ab4881fc07b5c~mv2.jpg|$ASSETS_DIR/flow-fest/facilitator-yamini.jpg"
  "b17cf0_831cbc8fdc79476eb6bdd8ed452a089f~mv2.jpg|$ASSETS_DIR/flow-fest/facilitator-aditi.jpg"
  "b17cf0_54c897cdef7f4a4fa71932a7a5eec3d7~mv2.jpg|$ASSETS_DIR/flow-fest/facilitator-ravi.jpg"
  "b17cf0_1fdf3a4c39f34ea8b3fe319f2ae658b3~mv2.jpg|$ASSETS_DIR/flow-fest/facilitator-anchana.jpg"
  "2572af_f221914e513045449fb6c90874b622d0~mv2.jpeg|$ASSETS_DIR/flow-fest/facilitator-ranjit.jpeg"
  "2572af_6a1794c609d9428aa44bc32fc42924c7~mv2.jpg|$ASSETS_DIR/flow-fest/facilitator-ashrita.jpg"
  "b17cf0_c50da9aac42d4902b61fa400fa6bff34f000.jpg|$ASSETS_DIR/flow-fest/venue-1.jpg"
  "b17cf0_12a419bd5a08497abd7a94575f12e371~mv2.jpg|$ASSETS_DIR/flow-fest/venue-2.jpg"
  "b17cf0_89d825ea2be14fcdbb0d5e3021dd17c6~mv2.jpg|$ASSETS_DIR/flow-fest/venue-3.jpg"
  "b17cf0_bfb95dab4f00469e8d7fdebed5e38ea0~mv2.jpg|$ASSETS_DIR/flow-fest/venue-4.jpg"
  "b17cf0_e7649e9a3040440d950c10a3c00f4dcd~mv2.jpg|$ASSETS_DIR/flow-fest/pricing-tent-solo.jpg"
  "b17cf0_c2f7338105fa4ad7999fdc73285b0334~mv2.jpg|$ASSETS_DIR/flow-fest/pricing-tent-duo.jpg"
  "b17cf0_f93959cc74b04afa9793878bcf11a097~mv2.jpg|$ASSETS_DIR/flow-fest/pricing-tent-trio.jpg"
  "b17cf0_f3cec603f2064216950dc40d68caf1ef~mv2.jpg|$ASSETS_DIR/flow-fest/pricing-cottage-solo.jpg"
  "b17cf0_24b8ee119fa044f99bc42d5de01726c0~mv2.jpg|$ASSETS_DIR/flow-fest/pricing-cottage-trio.jpg"
  "b17cf0_d843f2d9e2914c7988e363076732e1cd~mv2.jpg|$ASSETS_DIR/flow-fest/closing.jpg"

  # Shared assets
  "b17cf0_5dec0196bb284d9681e2b01151cce6fa~mv2.png|$ASSETS_DIR/shared/logo.png"
  "01c3aff52f2a4dffa526d7a9843d46ea.png|$ASSETS_DIR/shared/icon-instagram.png"
  "6ea5b4a88f0b4f91945b40499aa0af00.png|$ASSETS_DIR/shared/icon-linkedin.png"
)

echo "Downloading Hoopinkai assets from Wix CDN..."

for pair in "${DOWNLOADS[@]}"; do
  IFS='|' read -r wix_id dest <<< "$pair"
  url="$BASE_URL/$wix_id"

  echo "Downloading: $dest"
  curl -sL "$url" -o "$dest"

  # Quick check
  if [ -s "$dest" ]; then
    echo "  ✓ Downloaded $(stat -f%z "$dest" 2>/dev/null || stat --printf=%s "$dest" 2>/dev/null) bytes"
  else
    echo "  ✗ Failed or empty: $dest"
  fi
done

echo "Done!"
