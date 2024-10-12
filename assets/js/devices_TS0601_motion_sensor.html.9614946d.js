"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[35882],{85738:(e,n,t)=>{t.r(n),t.d(n,{comp:()=>o,data:()=>c});var i=t(1768);const a={},o=(0,t(69420).A)(a,[["render",function(e,n){const t=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[n[7]||(n[7]=(0,i.Lk)("h1",{id:"tuya-ts0601-motion-sensor",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-motion-sensor"},[(0,i.Lk)("span",null,"Tuya TS0601_motion_sensor")])],-1)),(0,i.Lk)("table",null,[n[6]||(n[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[n[2]||(n[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"TS0601_motion_sensor")],-1)),(0,i.Lk)("tr",null,[n[1]||(n[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>n[0]||(n[0]=[(0,i.eW)("Tuya")]))),_:1})])]),n[3]||(n[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Human presence sensor AIR")],-1)),n[4]||(n[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"occupancy, o_sensitivity, v_sensitivity, led_status, vacancy_delay, light_on_luminance_prefer, light_off_luminance_prefer, mode, luminance_level, reference_luminance, vacant_confirm_time, linkquality")],-1)),n[5]||(n[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_motion_sensor.png",alt:"Tuya TS0601_motion_sensor"})])],-1))])]),n[8]||(n[8]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="o-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#o-sensitivity-enum"><span>O sensitivity (enum)</span></a></h3><p>O-Sensitivity mode. Value can be found in the published state on the <code>o_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;o_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>sensitive</code>, <code>normal</code>, <code>cautious</code>.</p><h3 id="v-sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#v-sensitivity-enum"><span>V sensitivity (enum)</span></a></h3><p>V-Sensitivity mode. Value can be found in the published state on the <code>v_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;v_sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>speed_priority</code>, <code>normal_priority</code>, <code>accuracy_priority</code>.</p><h3 id="led-status-enum" tabindex="-1"><a class="header-anchor" href="#led-status-enum"><span>Led status (enum)</span></a></h3><p>Led status switch. Value can be found in the published state on the <code>led_status</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_status&quot;: NEW_VALUE}</code>. The possible values are: <code>ON</code>, <code>OFF</code>.</p><h3 id="vacancy-delay-numeric" tabindex="-1"><a class="header-anchor" href="#vacancy-delay-numeric"><span>Vacancy delay (numeric)</span></a></h3><p>Vacancy delay. Value can be found in the published state on the <code>vacancy_delay</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vacancy_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>1000</code>. The unit of this value is <code>sec</code>.</p><h3 id="light-on-luminance-prefer-numeric" tabindex="-1"><a class="header-anchor" href="#light-on-luminance-prefer-numeric"><span>Light on luminance prefer (numeric)</span></a></h3><p>Light-On luminance prefer. Value can be found in the published state on the <code>light_on_luminance_prefer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_on_luminance_prefer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>.</p><h3 id="light-off-luminance-prefer-numeric" tabindex="-1"><a class="header-anchor" href="#light-off-luminance-prefer-numeric"><span>Light off luminance prefer (numeric)</span></a></h3><p>Light-Off luminance prefer. Value can be found in the published state on the <code>light_off_luminance_prefer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_off_luminance_prefer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10000</code>.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum"><span>Mode (enum)</span></a></h3><p>Working mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>general_model</code>, <code>temporaty_stay</code>, <code>basic_detection</code>, <code>sensor_test</code>.</p><h3 id="luminance-level-numeric" tabindex="-1"><a class="header-anchor" href="#luminance-level-numeric"><span>Luminance level (numeric)</span></a></h3><p>Luminance level. Value can be found in the published state on the <code>luminance_level</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="reference-luminance-numeric" tabindex="-1"><a class="header-anchor" href="#reference-luminance-numeric"><span>Reference luminance (numeric)</span></a></h3><p>Reference luminance. Value can be found in the published state on the <code>reference_luminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="vacant-confirm-time-numeric" tabindex="-1"><a class="header-anchor" href="#vacant-confirm-time-numeric"><span>Vacant confirm time (numeric)</span></a></h3><p>Vacant confirm time. Value can be found in the published state on the <code>vacant_confirm_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',25))])}]]),c=JSON.parse('{"path":"/devices/TS0601_motion_sensor.html","title":"Tuya TS0601_motion_sensor control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_motion_sensor control via MQTT","description":"Integrate your Tuya TS0601_motion_sensor via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"headers":[{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"O sensitivity (enum)","slug":"o-sensitivity-enum","link":"#o-sensitivity-enum","children":[]},{"level":3,"title":"V sensitivity (enum)","slug":"v-sensitivity-enum","link":"#v-sensitivity-enum","children":[]},{"level":3,"title":"Led status (enum)","slug":"led-status-enum","link":"#led-status-enum","children":[]},{"level":3,"title":"Vacancy delay (numeric)","slug":"vacancy-delay-numeric","link":"#vacancy-delay-numeric","children":[]},{"level":3,"title":"Light on luminance prefer (numeric)","slug":"light-on-luminance-prefer-numeric","link":"#light-on-luminance-prefer-numeric","children":[]},{"level":3,"title":"Light off luminance prefer (numeric)","slug":"light-off-luminance-prefer-numeric","link":"#light-off-luminance-prefer-numeric","children":[]},{"level":3,"title":"Mode (enum)","slug":"mode-enum","link":"#mode-enum","children":[]},{"level":3,"title":"Luminance level (numeric)","slug":"luminance-level-numeric","link":"#luminance-level-numeric","children":[]},{"level":3,"title":"Reference luminance (numeric)","slug":"reference-luminance-numeric","link":"#reference-luminance-numeric","children":[]},{"level":3,"title":"Vacant confirm time (numeric)","slug":"vacant-confirm-time-numeric","link":"#vacant-confirm-time-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1728731901000},"filePathRelative":"devices/TS0601_motion_sensor.md"}')}}]);