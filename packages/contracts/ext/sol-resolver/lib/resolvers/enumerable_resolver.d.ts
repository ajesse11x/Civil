import { ContractSource } from '../types';
import { Resolver } from './resolver';
export declare abstract class EnumerableResolver extends Resolver {
    abstract getAll(): ContractSource[];
}
