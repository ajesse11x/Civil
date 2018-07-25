import { AbstractArtifactAdapter } from './artifact_adapters/abstract_artifact_adapter';
import { SingleFileSubtraceHandler } from './trace_collector';
import { TraceInfoSubprovider } from './trace_info_subprovider';
import { TraceInfo } from './types';
/**
 * This class implements the [web3-provider-engine](https://github.com/MetaMask/provider-engine) subprovider interface.
 * ProfilerSubprovider is used to profile Solidity code while running tests.
 */
export declare class ProfilerSubprovider extends TraceInfoSubprovider {
    private readonly _profilerCollector;
    /**
     * Instantiates a ProfilerSubprovider instance
     * @param artifactAdapter Adapter for used artifacts format (0x, truffle, giveth, etc.)
     * @param defaultFromAddress default from address to use when sending transactions
     * @param isVerbose If true, we will log any unknown transactions. Otherwise we will ignore them
     */
    constructor(artifactAdapter: AbstractArtifactAdapter, defaultFromAddress: string, isVerbose?: boolean);
    protected _handleTraceInfoAsync(traceInfo: TraceInfo): Promise<void>;
    /**
     * Write the test profiler results to a file in Istanbul format.
     */
    writeProfilerOutputAsync(): Promise<void>;
}
/**
 * Computed partial coverage for a single file & subtrace for the purposes of
 * gas profiling.
 * @param contractData      Contract metadata (source, srcMap, bytecode)
 * @param subtrace          A subset of a transcation/call trace that was executed within that contract
 * @param pcToSourceRange   A mapping from program counters to source ranges
 * @param fileIndex         Index of a file to compute coverage for
 * @return Partial istanbul coverage for that file & subtrace
 */
export declare const profilerHandler: SingleFileSubtraceHandler;
