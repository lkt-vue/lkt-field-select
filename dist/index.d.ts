import { Plugin } from 'vue';
export { setNoOptionsMessage, setResourceOptionSlot, setResourceValueSlot } from './functions/settings-functions';
export type { Option } from "./types/Option";
import "./../lkt-field-select.css";
declare const LktFieldSelect: Plugin;
export default LktFieldSelect;
