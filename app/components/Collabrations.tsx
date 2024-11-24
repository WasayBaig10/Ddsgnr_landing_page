import React from "react";

function Collabrations() {
  return (
    <div className="flex flex-wrap bg-white text-black">
      <section className="w-[100vw] h-fit sm:h-[200px] flex items-center flex-col sm:flex-row justify-evenly  bg-white ">
        <div className="my-10 sm:w-[40%] h-[140px] w-[90vw] bg-white ml-1 sm:ml-10 justify-center flex flex-col   text-black">
          <h1 className="text-[30px] w-fit text-start ">
            Trusted by the world's best companies
          </h1>
          <h1 className="text-[21px] sm:h-fit  text-wrap w-fit">
            [social prove to build credibility]
          </h1>
        </div>
        <div className="sm:w-[60%] h-fit mb-5 sm:h-[140px] w-[100vw] bg-white flex flex-wrap justify-evenly items-center  text-black">
          <h1 className="text-[22px] m-7 sm:m-0">
            <svg
              width="140"
              height="90"
              viewBox="0 0 125 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="123.805"
                height="38.5171"
                transform="translate(0.561218 0.741455)"
                fill="url(#pattern0_1_803)"
              />
              <defs>
                <pattern
                  id="pattern0_1_803"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_1_803"
                    transform="matrix(0.00561798 0 0 0.0180578 0 -0.402889)"
                  />
                </pattern>
                <image
                  id="image0_1_803"
                  width="178"
                  height="100"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </h1>
          <h1 className="text-[22px] m-7 sm:m-0">
            <svg
              width="125"
              height="40"
              viewBox="0 0 125 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="123.805"
                height="38.5171"
                transform="translate(0.487976 0.741455)"
                fill="url(#pattern0_1_805)"
              />
              <defs>
                <pattern
                  id="pattern0_1_805"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_1_805"
                    transform="matrix(0.00561798 0 0 0.0180578 0 -0.402889)"
                  />
                </pattern>
                <image
                  id="image0_1_805"
                  width="178"
                  height="100"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAABkCAYAAAAi7WpaAAAAAXNSR0IArs4c6QAACcJJREFUeF7tnH9yE0cWx98bhRXZqlSZE6zZCwSo2sTyUnjsP7KWtyoouQA/DrCQHADsXACTAyTmBNj5AynZLWugai3nRwXYAyziBOiv2Cxo3taT28YaTc/0jOQgXr+p8l/q6Z7v+366+3VPjxH00ggIiAAK0KASNAKgICsEIiKgIIuwUUUoyMqAiAgoyCJsVBEKsjIgIgIKsggbVYSCrAyIiICCLMJGFaEgKwMiIqAgi7BRRSjIyoCICCjIImxUEQqyMiAiAgqyCBtVhIKsDIiIgIIswkYVoSArAyIioCCLsFFFKMjKgIgIKMgibFQRCrIyICICCrIIG1WEgqwMiIiAgizCRhWhICsDIiKgIIuwUUUoyMqAiAgoyCJsVBEKsjIgIgIKsggbVYSCrAyIiICCLMJGFaEgKwMiIqAgi7BRRSjIyoCICLx1kGuL9WcnHkmErc5282aRdubC5RADbADAn5Bglu8lgB4g9IKYNvsAD3ejVrdInXll58LlWYTgMgKcIyRuk/+63CbF9BQAot2oFeXVU+T3MAxn9uF0AwM8x1qB4BwC9IzWpxBDVIW9KIqiXpF6f++y0wAynbRoJNrYiVrX8tphU/8X/PEGETH0M3nlGSwiujYu0INOg3gbAEKHNrsB0eq/o9Y9h7LWIkW1IuJGHMdr42od55mz7lWQTXT+Eq6cew/pvhkFi8UbYb0a760VHbUYppfB+7eBoNBsYR6uS0SLZcCqhSs3AGnVsbMej0UPCNY6UXO9WIBOvrSCDAB/Df9+JcZ4Y8xwFwJrkEYgtkt1nDcPymBd60TNTddnry3V75TsOEdNIOLqzvaDNdc2f49y3oNcC+sNQOCReBJXt0p75/NG5glBfPS8ZmTOzZ3nw5XbdDASj38hrHe2m1+MX9FkaphGkAcjW1JegHifAHhB8mZkgLgRE/Ii6I2pgI0A4c5QOUuObIB6bJliebTjPDQioCemvsECzOSzgwXgyIWw2dlufpZlT22xziNxaj5MRBFCsPka4GEF4l4fgpn3gGYJqIGIVyz19ojofFaaYdIJW0rA999lrYPF5cE1i4DcyS9bZw2CL6YlzZhKkDvt5tmkYWnmp41Ec+HyVUT81gXk+cX642Tn4PsYJgDIXMSZdniBNgo0wWe26T7t+cyzcgfmNq0jK3e8tA5t7o867ebIAMC/Zc4ACHer8d5q1iwyFy6vms6btKVXpb2zeTPQZMbc7Fq8BdmWUhDQvd1266pL8DMA6aZ1Rq7TbDcm4S+WXy/WNxBgZHS2pRhzlvJQYES1dkCEu0W3Nl1iW7SMvyCnT+9WAG2BNVtnnCoMXa6zhZkBzhbZfQjDxsxLfMkp0XCHSElrTFneqx/aTiSktd3tVqF8uRbW1wHhRkLqVIzKXoJszH3hAp/LyDAXLm8k89e0vevaUv0+EPBLlqPLdY87+RyWDjQClWXmKdxhuX1rpzhIicbd9XEJtbXMOw0yQxADPB8CA/BDwGxYLBA86bSb58tE01LfCCy1xTp3nqGR8TW9Pv9z9M/DxeRQ87y3XYF4CPwhrYg8OmbWlzaKlu08Jt8ezZenIL14p0F2hS5p3Mdh/WZyZwPGNCMN0k67eRRfyyzQ67SbZzLSlpGFa55ms2A8Gh1dF8l59R7+ntppibY6Ucva4VzrHqeclyCnrsILLHzSAp62iCOio9zXLAyHzpUQULTbbqXuNJjRrwzI/Br5KPe1gFwoJz+uN00Hb9nZFrfjwFnkXgXZRCs5khUJIpctAzIAZKYzGVt11scjoiGQ07YYj3ewojotIJdOy4q2byvvJchepRZpC0yIGzvt77fKQJSWWuTNLGXaKXrPOwMyj04u5xLQYbFnWclbXyjkBdV18ZiWR2e9XnZY7PELmaErWV/aYq/M1tthI6lbcGOuL/Li6/L7OwOyixhbXplc7Nm23+I4Xvrx4fcje8J5bae9cHDdfoOSZxYsacfI4tHSaUvv/aalUDjGCJ8XW9ffvQTZ5LQj5x0Q4MlOu3nh4Ay92/Xxwt8WgyDYTpZOM9f2NvFV/9WFXx79i19wOF0XL1480z/1wa/JGSqt89j2fst0oPlwZZWQRmaBKu2deduvqb0F2fZGjg+Q72w/uO4C80eXPjlbqVQY4sQrZ3zWaT/4c5JKA9V/ASC55dbt9/tLPz36weVrGZxfWvmGiEZeo1tfUVvOSlBMX+4+bA0dsLL0JJwPV64Q0tAZFi47zp60U691LOQtyCYN2UbEtO2vqN/vX//p0Q98EixtdMbawnIDAvwm7eRcQHTV9gVHLazfhMTpPONVF4nWdg6+/Eht86NLn8xWKhVuc+TkXBZQGR0IEHHt2NnikXYHo/8fPrhlOcP8goguFHm97shl4WJTCTKPToWVmBsqwanLgHGRY5w8Rae+lODRmfrxd6/odTeAoBdDPHMqqC4Axny0MfUYJgJ8u9Nu8ohuvebCZVsH4nsiJLrXJ3pORIMjlYgYBhh8mnxj+aYBfEYUL2Uf47R2IK6Gvwvcivvx1rE2udMsENHI28Ojdsfcey/rcdp90wjyJPUN6soarcyiiUe5CcQCn1Xptwt5+eLBXizn1TRyXLWEeCIihjj3YH3GcczizZZcpBZvyO2OCZjn1pCtVG2x7rywKttSXh43CZgR4XEc0+eu0+yEYOap/csiB3YMzLfG6LhkXudPzdchg8GqLByTum8aQDb58uEoyQu3InEZGFvu49PGzD7s3zEn5wq1iQhPXsV4/efoQeqBoyx/DvJ0/EeJGeEFEHw1LV+FHNdYJHiTYneonmkB+fChDkbn4BbA4P9K2OIzmEXMlyRfuUzrOTkz59u3OBc25TLaxS4QfT0uTDwjAMBtROR8n0/QZWnlT6G+Pg3763lp04lA4lDpFIC8zNtRJ3sh8j9oKTQV8vacWdBdGkxdCLNE0A0Qu0T4tAq/3Zu0qQauEAE/JaAZBDw8otkloP+c1D9oeQnvs9YFAvrweJsA8JyAnp6G/c1Ja5204W8d5EkL0vr8jICC7Kfv4lQryOIs9VOQguyn7+JUK8jiLPVTkILsp+/iVCvI4iz1U5CC7Kfv4lQryOIs9VOQguyn7+JUK8jiLPVTkILsp+/iVCvI4iz1U5CC7Kfv4lQryOIs9VOQguyn7+JUK8jiLPVTkILsp+/iVCvI4iz1U5CC7Kfv4lQryOIs9VOQguyn7+JUK8jiLPVTkILsp+/iVCvI4iz1U5CC7Kfv4lQryOIs9VOQguyn7+JUK8jiLPVTkILsp+/iVCvI4iz1U5CC7Kfv4lQryOIs9VOQguyn7+JUK8jiLPVTkILsp+/iVCvI4iz1U9D/AZ4MIbAUoPSnAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </h1>
          <h1 className="text-[22px] m-7 sm:m-0">
            <svg
              width="125"
              height="40"
              viewBox="0 0 125 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="123.805"
                height="38.5171"
                transform="translate(0.341583 0.741455)"
                fill="url(#pattern0_1_809)"
              />
              <defs>
                <pattern
                  id="pattern0_1_809"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_1_809"
                    transform="matrix(0.00561798 0 0 0.0180578 0 -0.402889)"
                  />
                </pattern>
                <image
                  id="image0_1_809"
                  width="178"
                  height="100"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </h1>
          <h1 className="text-[22px] m-7 sm:m-0">
            <svg
              width="125"
              height="40"
              viewBox="0 0 125 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="123.805"
                height="38.5171"
                transform="translate(0.268372 0.741455)"
                fill="url(#pattern0_1_811)"
              />
              <defs>
                <pattern
                  id="pattern0_1_811"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_1_811"
                    transform="matrix(0.00561798 0 0 0.0180578 0 -0.402889)"
                  />
                </pattern>
                <image
                  id="image0_1_811"
                  width="178"
                  height="100"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </h1>
          <h1 className="text-[22px] m-7 sm:m-0">
            <svg
              width="124"
              height="40"
              viewBox="0 0 124 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect
                width="123.805"
                height="38.5171"
                transform="translate(0.19519 0.741455)"
                fill="url(#pattern0_1_813)"
              />
              <defs>
                <pattern
                  id="pattern0_1_813"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_1_813"
                    transform="matrix(0.00561798 0 0 0.0180578 0 -0.402889)"
                  />
                </pattern>
                <image
                  id="image0_1_813"
                  width="178"
                  height="100"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </h1>
        </div>
      </section>
      <div className="w-[100vw] flex flex-col space-y-6 justify-center ml-auto mr-auto">
        <h1 className="text-[29px] ml-auto mr-auto">Our Achievements</h1>
        <h1 className="sm:text-[20px] w-[90vw] ml-auto mr-auto text-[15px] text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quos fugiat omnis recusandae ut ab minus iste magnam modi nihil
          tempora sunt nisi soluta, minima debitis impedit laborum doloribus
          eveniet.
        </h1>
        <div className="flex justify-evenly flex-wrap text-center text-[28px] ">
          <ul className="sm:m-0 m-7">
            <li>200+</li>
            <li>Students</li>
          </ul>
          <ul className="sm:m-0 m-7">
            <li>200+</li>
            <li>Students</li>
          </ul>
          <ul className="sm:m-0 m-7">
            <li>200+</li>
            <li>Students</li>
          </ul>
          <ul className="sm:m-0 m-7">
            <li>200+</li>
            <li>Students</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Collabrations;
