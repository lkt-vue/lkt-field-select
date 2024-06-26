import {Settings} from "../settings/Settings";
import {Component} from "vue";

export const getNoOptionsMessage = () => {
    return Settings.NO_OPTIONS_MESSAGE;
}

export const setNoOptionsMessage = (str: string) => {
    Settings.NO_OPTIONS_MESSAGE = str;
    return true;
}

export const setSelectEmptyValueMessage = (str: string) => {
    Settings.emptyValueText = str;
    return true;
}

export const setResourceOptionSlot = (resource: string, component: string|Component) => {
    Settings.customResourceOptionSlots[resource] = component;
    return true;
}

export const setResourceValueSlot = (resource: string, component: string|Component) => {
    Settings.customResourceValueSlots[resource] = component;
    return true;
}

export const setDefaultSelectEmptyValueSlot = (str: string, component?: string|Component) => {
    Settings.defaultEmptyValueSlot = str;

    if (component) Settings.customResourceValueSlots[str] = component;
}